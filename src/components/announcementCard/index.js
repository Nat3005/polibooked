import React from 'react';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { arrayUnion, updateDoc, doc, arrayRemove } from 'firebase/firestore';
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
import { firestore } from '../../firebase/init';

function AnnouncementCard({ announcement, openEditModal }) {
  console.log({ announcement });
  const { user } = UserAuth();

  const handlePrice = (price) => {
    if (price.length === 0) return 'bezpłatne';
    if (price.length === 1) return price[0];
    if (price.length === 2) return `${price[0]} - ${price[1]}`;

    return '';
  };

  const handleAddFavourites = async (e) => {
    e.preventDefault();
    const favouritesRef = doc(firestore, 'favourites', user.uid);
    const announcementRef = doc(firestore, 'announcements', announcement.id);
    await updateDoc(favouritesRef, {
      favourites: arrayUnion(announcementRef),
    });
  };

  const handleRemoveFavourites = async (e) => {
    e.preventDefault();
    const favouritesRef = doc(firestore, 'favourites', user.uid);
    const announcementRef = doc(firestore, 'announcements', announcement.id);
    await updateDoc(favouritesRef, {
      favourites: arrayRemove(announcementRef),
    });
  };

  return (
    <AnnouncementContainer variant={announcement.type}>
      <HeaderContainer>
        <ProfileContainer>
          <PictureContainer variant={announcement.type}>
            <Picture src={announcement.user.photoURL} />
          </PictureContainer>
          <UserDataContainer>
            <MediumText weight="bold" variant="dark">
              {announcement.user.displayName}
            </MediumText>
            <SmallText>
              {`${announcement.user.faculty} | ${announcement.user.major}`}
            </SmallText>
          </UserDataContainer>
        </ProfileContainer>
        {user.uid === announcement.user.uid && (
          <MoreVertRoundedIcon onClick={() => openEditModal(announcement)} />
        )}
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
        {announcement.tags?.map((item) => (
          <SmallText key={item}>{`#${item}`}</SmallText>
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
            <PrimaryButton
              size="small"
              variant="purpleAccent"
              onClick={handleAddFavourites}
            >
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
