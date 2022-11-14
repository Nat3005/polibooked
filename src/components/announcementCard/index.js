import React from 'react';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { PrimaryButton } from '../buttons/ButtonElements';
import {
  AnnouncementContainer,
  HeaderContainer,
  Picture,
  PictureContainer,
  ProfileContainer,
  UserDataContainer,
  PriceContainer,
  ChipsContainer,
  ButtonsContainer,
} from './AnnouncementCardElements';
import { MediumText, SmallText } from '../text/TextElements';
import { UserAuth } from '../../context/UserContext';

function AnnouncementCard({ announcement }) {
  const { user } = UserAuth();

  const handlePrice = (price) => {
    if (price.length === 0) return 'bezpłatne';
    if (price.length === 1) return price[0];
    if (price.length === 2) return price[0].concat(' - ', price[1]);

    return '';
  };

  return (
    <AnnouncementContainer variant={announcement.type}>
      <HeaderContainer>
        <ProfileContainer>
          <PictureContainer variant={announcement.type}>
            <Picture src={user.photoURL} />
          </PictureContainer>
          <UserDataContainer>
            <MediumText weight="bold" variant="dark">
              Natalia Rusin
            </MediumText>
            <SmallText>
              Informatyka Techniczna | Wydział Informatyki i Telekomunikacji
            </SmallText>
          </UserDataContainer>
        </ProfileContainer>
        <MoreVertRoundedIcon />
      </HeaderContainer>
      <SmallText variant="dark" weight="bold">
        {announcement.title}
      </SmallText>
      <SmallText variant="dark" weight="normal">
        {announcement.description}
      </SmallText>
      <PriceContainer>
        <AttachMoneyRoundedIcon /> {handlePrice(announcement.price)}
      </PriceContainer>
      <ChipsContainer variant={announcement.type}>
        {announcement.tags?.map((key, item) => (
          <SmallText>{'#'.concat(announcement.tags[item])}</SmallText>
        ))}
      </ChipsContainer>
      <ButtonsContainer>
        {announcement.type.includes('tutor') ? (
          <>
            <PrimaryButton size="small" variant="purpleAccent">
              <MailOutlineRoundedIcon /> napisz
            </PrimaryButton>
            <PrimaryButton size="small" variant="purpleAccent">
              <EventRoundedIcon /> rezerwój
            </PrimaryButton>
            <PrimaryButton size="small" variant="purpleAccent">
              <FavoriteBorderRoundedIcon /> polub
            </PrimaryButton>
          </>
        ) : (
          <>
            <PrimaryButton size="small" variant="yellowAccent">
              <MailOutlineRoundedIcon /> napisz
            </PrimaryButton>
            <PrimaryButton size="small" variant="yellowAccent">
              <FavoriteBorderRoundedIcon /> polub
            </PrimaryButton>
          </>
        )}
      </ButtonsContainer>
    </AnnouncementContainer>
  );
}

export default AnnouncementCard;
