import React, { useRef, useState } from 'react';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import * as yup from 'yup';
import { HeadlineContainer } from '../modal/ModalElements';
import {
  ModalContainer,
  ModalOverlay,
  TitleContainer,
  SubmitButtons,
  EventFormContainer,
  Inputs,
  Input,
  CalendarPicker,
} from './EventModalElements';
import { SmallText } from '../../ui_elements/text/TextElements';
import {
  TertiaryButton,
  PrimaryButton,
} from '../../ui_elements/buttons/ButtonElements';
import TextInput from '../../ui_elements/textInput';
import { addEvent } from '../../firebase/eventsService';
import ErrorMessage from '../../ui_elements/errorMessage';

function EventModal({ showEventModal, setShowEventModal }) {
  const [dateValue, setValue] = useState(null);
  const userEvents = useRef({});
  const [validationErrors, setValidationErrors] = useState([]);

  if (!showEventModal) return null;

  const writeToFirestore = (newEvent) => {
    addEvent(newEvent).then((result) =>
      console.warn(`I should be a toast: ${result}`)
    );

    userEvents.current.hours.value = '';
    userEvents.current.minutes.value = '';
    setValue(null);
    setValidationErrors([]);
    setShowEventModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessages = [];
    if (
      userEvents.current.hours.value < 0 ||
      userEvents.current.minutes.value < 0
    ) {
      errorMessages.push('Wartości nie mogą być ujemne');
      setValidationErrors(errorMessages);
    } else {
      const hoursToMin =
        parseInt(userEvents.current.hours.value * 60, 10) +
        parseInt(userEvents.current.minutes.value, 10);
      const calculatedEndDate = dayjs(dateValue).add(hoursToMin, 'm').toDate();
      const newEvent = {
        eventStartTime: dayjs(dateValue).toDate(),
        eventEndTime: calculatedEndDate,
        subscriberRef: null,
      };

      const schema = yup.object().shape({
        eventStartTime: yup
          .date()
          .nullable()
          .required()
          .typeError('Data rozpoczęcia nie może być pusta'),
        eventEndTime: yup
          .date()
          .nullable()
          .required()
          .typeError('Długość trwania zajęć nie może być pusta'),
      });

      schema
        .validate(newEvent, { abortEarly: false })
        .then(() => writeToFirestore(newEvent))
        .catch((err) => {
          setValidationErrors(err.errors);
        });
    }
  };

  const validationErrorsHTML = validationErrors?.map((it) => (
    <ErrorMessage key={it} message={it} />
  ));

  const handleClose = () => {
    setValidationErrors([]);
    setShowEventModal(!showEventModal);
  };

  const eventForm = (
    <EventFormContainer>
      <SmallText variant="purpleAccent" weight="bold">
        Podaj długość zajęć*
      </SmallText>
      <Inputs>
        <Input>
          <TextInput
            variant="userEvent"
            refs={(ref) => {
              userEvents.current.hours = ref;
            }}
            type="number"
            name="hours"
            placeholder="Np. 1"
            step="1"
            min="0"
          />
          <SmallText>h</SmallText>
        </Input>
        <Input>
          <TextInput
            variant="userEvent"
            refs={(ref) => {
              userEvents.current.minutes = ref;
            }}
            type="number"
            name="minutes"
            placeholder="Np. 30"
            step="5"
            min="0"
            max="60"
          />
          <SmallText>min</SmallText>
        </Input>
      </Inputs>
      <SmallText variant="purpleAccent" weight="bold">
        Podaj datę i godzinę rozpoczęcia*
      </SmallText>
      <CalendarPicker>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Wybierz datę i godzinę"
            value={dateValue}
            minDate={new Date()}
            ampm={false}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            components={{
              OpenPickerIcon: CalendarMonthRoundedIcon,
              LeftArrowIcon: ArrowBackRoundedIcon,
              RightArrowIcon: ArrowForwardRoundedIcon,
            }}
            InputProps={{
              sx: { '& .MuiSvgIcon-root': { color: 'var(--accent-purple)' } },
            }}
          />
        </LocalizationProvider>
      </CalendarPicker>
    </EventFormContainer>
  );

  return (
    <ModalOverlay>
      <ModalContainer>
        <HeadlineContainer>
          <TitleContainer>
            <CalendarMonthRoundedIcon /> Utwórz termin zajęć
          </TitleContainer>
          <CloseRoundedIcon
            style={{ cursor: 'pointer' }}
            onClick={handleClose}
          />
        </HeadlineContainer>
        <SmallText variant="dark" weight="normal">
          Dodany termin będzie widoczny dla innych użytkowników
        </SmallText>
        {eventForm}
        <SubmitButtons onSubmit={handleSubmit}>
          <TertiaryButton
            onClick={handleClose}
            variant="dark"
            aria-label="Anuluj"
          >
            Anuluj
          </TertiaryButton>
          <PrimaryButton size="big" variant="purpleAccent" aria-label="Zapisz">
            Zapisz
          </PrimaryButton>
        </SubmitButtons>
        <div>{validationErrorsHTML}</div>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default EventModal;
