import { React, useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {
  EventFormContainer,
  Inputs,
  Input,
  CalendarPicker,
} from './EventFormElements';
import TextInput from '../textInput';
import { SmallText } from '../text/TextElements';

function EventForm(func) {
  const [value, setValue] = useState(dayjs('2022-04-07'));
  return (
    <EventFormContainer>
      <SmallText variant="purpleAccent" weight="bold">
        Podaj długość zajęć
      </SmallText>
      <Inputs>
        <Input>
          <TextInput
            variant="userEvent"
            type="text"
            name="hours"
            placeholder="Np. 1"
          />
          <SmallText>h</SmallText>
        </Input>
        <Input>
          <TextInput
            variant="userEvent"
            type="text"
            name="minutes"
            placeholder="Np. 30"
          />
          <SmallText>min</SmallText>
        </Input>
      </Inputs>
      <SmallText variant="dark">Wprowadzona długośc zajęć: </SmallText>
      <SmallText variant="purpleAccent" weight="bold">
        Podaj datę i godzinę rozpoczęcia
      </SmallText>
      <CalendarPicker>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Wybierz datę i godzinę"
            value={value}
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
      <SmallText variant="dark">Twoje zajęcia potrwają od </SmallText>
    </EventFormContainer>
  );
}

export default EventForm;
