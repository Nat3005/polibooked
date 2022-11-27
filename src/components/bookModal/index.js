import { CalendarMonthRounded } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  HeadlineContainer,
  SubmitButtons,
  ModalContainer,
  ModalOverlay,
  TitleContainer,
  FreeEventsContainer,
} from './BookModalElements';
import { SmallText } from '../text/TextElements';
import { TertiaryButton, PrimaryButton } from '../buttons/ButtonElements';
import { useFreeEvents } from '../../dataManagement';
import DateCard from '../dateCard';
import TextInput from '../textInput';
import { editEvent } from '../../firebase/eventsService';
import { UserAuth } from '../../context/UserContext';

function BookModal({ showModal, setShowModal, announcement }) {
  const [events] = useFreeEvents(announcement?.user.uid);
  const [selectedEvent, setSelected] = useState(null);
  const { user } = UserAuth();
  const bookEvents = useRef({});
  const handleClick = (e) => {
    setSelected(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedEvent !== null) {
      const updateEvent = {
        id: selectedEvent.id,
        eventStartTime: selectedEvent.eventStartTime,
        eventEndTime: selectedEvent.eventEndTime,
        publisherRef: selectedEvent.publisherRef,
        comment: bookEvents.current.comment.value,
      };

      editEvent(updateEvent, user.uid).then((result) =>
        console.warn(`I should be a tołst: ${result}`)
      );
      bookEvents.current.comment.value = '';
      setSelected(null);
      setShowModal(false);
    }
  };

  if (!showModal) return null;
  return (
    <ModalOverlay>
      <ModalContainer>
        <HeadlineContainer>
          <TitleContainer>
            <CalendarMonthRounded /> Wybierz termin zajęć
          </TitleContainer>
          <CloseRoundedIcon
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelected(null);
              setShowModal(!showModal);
            }}
          />
        </HeadlineContainer>

        <SmallText variant="dark" weight="normal">
          Rezerwujesz zajęcia z {announcement.user.displayName}
        </SmallText>
        <FreeEventsContainer>
          {Object.keys(events).length !== 0 ? (
            Object.entries(events)?.map((e) => (
              <DateCard
                key={e[1].id}
                startDate={e[1].eventStartTime}
                endDate={e[1].eventEndTime}
                type="readOnly"
                onClick={() => handleClick(e[1])}
                status={selectedEvent?.id === e[1].id}
              />
            ))
          ) : (
            <></>
          )}
        </FreeEventsContainer>
        <TextInput
          variant="userEvent"
          refs={(ref) => {
            bookEvents.current.comment = ref;
          }}
          type="textarea"
          name="comment"
          wrap="soft"
          placeholder="Zostaw tutaj opcjonalny komentarz, dla osoby która udzieli Ci korepetycji"
        />
        <SubmitButtons onSubmit={handleSubmit}>
          <TertiaryButton variant="dark">Anuluj</TertiaryButton>
          <PrimaryButton size="big" variant="purpleAccent">
            Zapisz
          </PrimaryButton>
        </SubmitButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default BookModal;
