import { React, useMemo } from 'react';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { arrayUnion, updateDoc, doc, arrayRemove } from 'firebase/firestore';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import { useNavigate } from 'react-router-dom';
import {
  PrimaryButton,
  TertiaryButton,
} from '../../ui_elements/buttons/ButtonElements';
import {
  AnnouncementContainer,
  HeaderContainer,
  ProfileContainer,
  UserDataContainer,
  PriceContainer,
  ChipsContainer,
  ButtonsContainer,
  IconManagementContainer,
  BreadcrumbsContainer,
} from './AnnouncementCardElements';
import { MediumText, SmallText } from '../../ui_elements/text/TextElements';
import { UserAuth } from '../../context/UserContext';
import { firestore } from '../../firebase/init';
import { useFavourites } from '../../data/useFavourites';
import BreadcrumbsBar from '../breadcrumbs';
import { removeAnnouncement } from '../../firebase/announcementService';
import {
  assembleChatID,
  prepareChat,
  navigateToChat,
} from '../../firebase/chatService';
import UserPicture from '../../ui_elements/userPicture';

function AnnouncementCard({
  announcement,
  openEditModal,
  type,
  openBookModal,
}) {
  const navigate = useNavigate();
  const { user: loggedInUser } = UserAuth();
  const [favourites] = useFavourites();
  const author = type === 'personal' ? loggedInUser : announcement.user;

  const chatID = useMemo(
    () => assembleChatID(loggedInUser, author),
    [loggedInUser, author]
  );

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
    const favouritesRef = doc(firestore, 'favourites', loggedInUser.uid);
    const announcementRef = doc(firestore, 'announcements', announcement.id);
    await updateDoc(favouritesRef, {
      favourites: arrayUnion(announcementRef),
    });
  };

  const handleRemoveFavourites = async (e) => {
    e.preventDefault();
    const favouritesRef = doc(firestore, 'favourites', loggedInUser.uid);
    const announcementRef = doc(firestore, 'announcements', announcement.id);
    await updateDoc(favouritesRef, {
      favourites: arrayRemove(announcementRef),
    });
  };

  const handleRemoveAnnouncement = (e) => {
    e.preventDefault();
    removeAnnouncement(announcement.id).then(() => {
      console.warn('Ogłoszenie usunięte');
    });
  };

  const handleConversation = async () => {
    prepareChat(loggedInUser, author, chatID).then(() =>
      navigateToChat(chatID, author, navigate, '/czat/rozmowa')
    );
  };

  return (
    <AnnouncementContainer variant={announcement.type}>
      <HeaderContainer>
        <ProfileContainer>
          <UserPicture type={announcement.type} imageSrc={author.photoURL} />
          <UserDataContainer>
            <MediumText weight="bold" variant="dark">
              {author.displayName}
            </MediumText>
            {!type.includes('announcements') && (
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
          </UserDataContainer>
        </ProfileContainer>
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

      {loggedInUser.uid === author.uid && (
        <ButtonsContainer>
          <IconManagementContainer>
            <TertiaryButton
              size="small"
              onClick={() => openEditModal(announcement)}
              variant="dark"
              aria-label="Edytuj"
            >
              <BorderColorRoundedIcon /> Edytuj
            </TertiaryButton>
            <TertiaryButton
              size="small"
              onClick={handleRemoveAnnouncement}
              variant="dark"
              aria-label="Usuń"
            >
              <DeleteSweepRoundedIcon /> Usuń
            </TertiaryButton>
          </IconManagementContainer>
        </ButtonsContainer>
      )}

      {loggedInUser.uid !== author.uid && (
        <ButtonsContainer>
          {announcement.type.includes('tutor') ? (
            <>
              <PrimaryButton
                onClick={handleConversation}
                size="small"
                variant="purpleAccent"
                aria-label="Napisz"
              >
                <MailOutlineRoundedIcon /> napisz
              </PrimaryButton>
              <PrimaryButton
                size="small"
                variant="purpleAccent"
                onClick={() => openBookModal(announcement)}
                aria-label="Rezerwuj"
              >
                <EventRoundedIcon /> rezerwuj
              </PrimaryButton>
              {isFavorite ? (
                <PrimaryButton
                  size="small"
                  variant="purpleAccent"
                  onClick={handleRemoveFavourites}
                  aria-label="Usuń z ulubionych"
                >
                  <FavoriteIcon /> usuń z ulubionych
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  size="small"
                  variant="purpleAccent"
                  onClick={handleAddFavourites}
                  aria-label="Dodaj do ulubionych"
                >
                  <FavoriteBorderRoundedIcon /> dodaj do ulubionych
                </PrimaryButton>
              )}
            </>
          ) : (
            <>
              <PrimaryButton
                onClick={handleConversation}
                size="small"
                variant="yellowAccent"
                aria-label="Napisz"
              >
                <MailOutlineRoundedIcon /> napisz
              </PrimaryButton>
              {isFavorite ? (
                <PrimaryButton
                  size="small"
                  variant="yellowAccent"
                  onClick={handleRemoveFavourites}
                  aria-label="Usuń z ulubionych"
                >
                  <FavoriteIcon /> usuń z ulubionych
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  size="small"
                  variant="yellowAccent"
                  onClick={handleAddFavourites}
                  aria-label="Dodaj do ulubionych"
                >
                  <FavoriteBorderRoundedIcon /> dodaj do ulubionych
                </PrimaryButton>
              )}
            </>
          )}
        </ButtonsContainer>
      )}
    </AnnouncementContainer>
  );
}

export default AnnouncementCard;
