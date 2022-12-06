import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import dayjs from 'dayjs';
import {
  ButtonsContainer,
  EventDetailsContainer,
  TutoringCardContainer,
  UserDataContainer,
  DetailsContainer,
  Picture,
  PictureContainer,
} from './TutoringCardElements';
import ProfilePicture from '../profilePicture';
import { SmallText, MediumText } from '../text/TextElements';
import { Chip } from '../chips/ChipsElements';
import { SecondaryButton, TertiaryButton } from '../buttons/ButtonElements';

function TutoringCard({ type, user, startDate, endDate }) {
  return (
    <TutoringCardContainer>
      <SmallText weight="bold">
        {dayjs.unix(startDate.seconds).format('DD-MM-YYYY')}
      </SmallText>
      <DetailsContainer type={type}>
        <PictureContainer type={type}>
          <Picture src={user.photoURL} />
        </PictureContainer>
        <UserDataContainer>
          <MediumText weight="bold">{user.displayName}</MediumText>
          <SmallText>{`${user.faculty} | ${user.major}`}</SmallText>
          <EventDetailsContainer>
            <Chip variant="dark">
              {' '}
              {dayjs.unix(startDate.seconds).format('HH:mm')} -{' '}
              {dayjs.unix(endDate.seconds).format('HH:mm')}
            </Chip>
            <ButtonsContainer>
              <TertiaryButton
                size="small"
                variant={type === 'tutor' ? 'purpleAccent' : 'dark'}
              >
                <MailOutlineRoundedIcon /> Napisz
              </TertiaryButton>
              <TertiaryButton
                size="small"
                variant={type === 'tutor' ? 'purpleAccent' : 'dark'}
              >
                <DeleteSweepRoundedIcon /> Odwołaj
              </TertiaryButton>
            </ButtonsContainer>
          </EventDetailsContainer>
        </UserDataContainer>
      </DetailsContainer>
    </TutoringCardContainer>
  );
}

export default TutoringCard;
