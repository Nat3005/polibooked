import React from 'react';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { arrayUnion, updateDoc, doc, arrayRemove } from 'firebase/firestore';
import { PrimaryButton, TertiaryButton } from '../buttons/ButtonElements';
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
  BreadcrumbsContainer,
} from './AnnouncementCardElements';
import { MediumText, SmallText } from '../text/TextElements';
import { UserAuth } from '../../context/UserContext';
import { firestore } from '../../firebase/init';
import { useFavourites } from '../../dataManagement';
import BreadcrumbsBar from '../breadcrumbs';
import { removeAnnouncement } from '../../firebase/announcementService';

function AnnouncementCard({
  announcement,
  openEditModal,
  type,
  openBookModal,
}) {
  const { user } = UserAuth();
  const [favourites] = useFavourites();
  const isFavorite = favourites.find(
    (favourite) => favourite.id === announcement.id
  );

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

  const handleRemoveAnnouncemntBecauseICan = (e) => {
    e.preventDefault();

    removeAnnouncement(announcement.id).then(()=>{
      console.warn("O la Boga! Udao się!")
    });

  }

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
            {type.includes('favourites') && (
              <BreadcrumbsContainer>
                {' '}
                <SmallText> Ogłoszenie w </SmallText>{' '}
                <BreadcrumbsBar
                  variant="disabled"
                  abbreviation={announcement.abbreviation}
                  major={announcement.major}
                />
              </BreadcrumbsContainer>
            )}

            {type.includes('announcements') && (
              <SmallText>
                {' '}
                {`${announcement.user.faculty} | ${announcement.user.major}`}
              </SmallText>
            )}
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
            <PrimaryButton
              size="small"
              variant="purpleAccent"
              onClick={() => openBookModal(announcement)}
            >
              <EventRoundedIcon /> rezerwój
            </PrimaryButton>
            {isFavorite ? (
              <PrimaryButton
                size="small"
                variant="purpleAccent"
                onClick={handleRemoveFavourites}
              >
                <FavoriteIcon /> usuń z ulubionych
              </PrimaryButton>
            ) : (
              <PrimaryButton
                size="small"
                variant="purpleAccent"
                onClick={handleAddFavourites}
              >
                <FavoriteBorderRoundedIcon /> dodaj do ulubionych
              </PrimaryButton>
            )}
          </>
        ) : (
          <>
            <PrimaryButton size="small" variant="yellowAccent">
              <MailOutlineRoundedIcon /> napisz
            </PrimaryButton>
            {isFavorite ? (
              <PrimaryButton
                size="small"
                variant="yellowAccent"
                onClick={handleRemoveFavourites}
              >
                <FavoriteIcon /> usuń z ulubionych
              </PrimaryButton>
            ) : (
              <PrimaryButton
                size="small"
                variant="yellowAccent"
                onClick={handleAddFavourites}
              >
                <FavoriteBorderRoundedIcon /> dodaj do ulubionych
              </PrimaryButton>
            )}
          </>
        )}
          {user.uid === announcement.user.uid &&
            <PrimaryButton
            size="small"
            variant="rosso"
            onClick={handleRemoveAnnouncemntBecauseICan}
          > bieda button do usuwania
            </PrimaryButton>}
      </ButtonsContainer>
    </AnnouncementContainer>
  );
}

export default AnnouncementCard;
