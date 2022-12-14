import React, { useMemo } from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import {
  ButtonsContainer,
  EventDetailsContainer,
  TutoringCardContainer,
  UserDataContainer,
  DetailsContainer,
  BottomContainer,
} from './TutoringCardElements';
import { SmallText, MediumText } from '../../ui_elements/text/TextElements';
import { TertiaryButton } from '../../ui_elements/buttons/ButtonElements';
import { cancelEvent } from '../../firebase/eventsService';
import { UserAuth } from '../../context/UserContext';

import {
  assembleChatID,
  prepareChat,
  navigateToChat,
} from '../../firebase/chatService';

import UserPicture from '../../ui_elements/userPicture';

function TutoringCard({
  comment,
  eventID,
  type,
  user: interlocutorUser,
  startDate,
  endDate,
  publisher,
}) {
  const navigate = useNavigate();
  const { user: loggedInUser } = UserAuth();

  const chatID = useMemo(
    () => assembleChatID(loggedInUser, interlocutorUser),
    [loggedInUser, interlocutorUser]
  );

  const handleConversation = async () => {
    prepareChat(loggedInUser, interlocutorUser, chatID).then(() =>
      navigateToChat(chatID, interlocutorUser, navigate, '/czat/rozmowa')
    );
  };

  const handleCancel = (event) => {
    event.preventDefault();

    const canceledEvent = {
      eventEndTime: endDate,
      eventStartTime: startDate,
      publisherRef: publisher,
      id: eventID,
    };

    cancelEvent(canceledEvent).then((result) =>
      console.warn(`I should be a tołsty tołstoj: ${result}`)
    );
  };
  return (
    <TutoringCardContainer type={type}>
      <UserDataContainer>
        <UserPicture type={type} imageSrc={interlocutorUser.photoURL} />
        <DetailsContainer>
          <MediumText weight="bold">{interlocutorUser.displayName}</MediumText>
        </DetailsContainer>
      </UserDataContainer>

      <SmallText>{comment} </SmallText>
      <BottomContainer>
        <EventDetailsContainer type={type}>
          <SmallText
            weight="bold"
            variant={type === 'tutor' ? 'light' : 'dark'}
          >
            Termin: {dayjs.unix(startDate.seconds).format('DD-MM-YYYY')}
            {', '}
            {dayjs.unix(startDate.seconds).format('HH:mm')} -{' '}
            {dayjs.unix(endDate.seconds).format('HH:mm')}
          </SmallText>
        </EventDetailsContainer>
        <ButtonsContainer>
          <TertiaryButton
            onClick={handleConversation}
            size="small"
            variant="dark"
            aria-label="Napisz"
          >
            <MailOutlineRoundedIcon /> Napisz
          </TertiaryButton>
          <TertiaryButton
            onClick={handleCancel}
            size="small"
            variant="dark"
            aria-label="Odwołaj"
          >
            <DeleteSweepRoundedIcon /> Odwołaj
          </TertiaryButton>
        </ButtonsContainer>
      </BottomContainer>
    </TutoringCardContainer>
  );
}

export default TutoringCard;
