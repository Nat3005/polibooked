import {React, useState, useMemo} from 'react';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { arrayUnion, updateDoc, doc, arrayRemove } from 'firebase/firestore';
import { PrimaryButton, TertiaryButton } from '../buttons/ButtonElements';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
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
  IconManagementContainer,
  BreadcrumbsContainer,
} from './AnnouncementCardElements';
import { MediumText, SmallText } from '../text/TextElements';
import { UserAuth } from '../../context/UserContext';
import { firestore } from '../../firebase/init';
import { useFavourites } from '../../dataManagement';
import BreadcrumbsBar from '../breadcrumbs';
import { removeAnnouncement } from '../../firebase/announcementService';
import Drowpdown from '../dropdown';
import { useNavigate } from 'react-router-dom';
import {
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import { assembleChatID, prepareChat, navigateToChat } from "../../firebase/domowUsluga";


function AnnouncementCard({
  announcement,
  openEditModal,
  type,
  openBookModal,

}) {
  const navigate = useNavigate();
  const { user: loggedInUser } = UserAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [favourites] = useFavourites();

  const chatID = useMemo(
    () => assembleChatID(loggedInUser, announcement.user),
    [loggedInUser, announcement.user]
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

  const handleRemoveAnnouncement = (e) => {
    e.preventDefault();
    removeAnnouncement(announcement.id).then(()=>{
      console.warn("O la Boga! Udao się!")
    });
  }

  // TODO przeniesc handle conversation i tworzenie ID
  // const mutualId =
  // user.uid > announcement.user.uid
  //   ? user.uid + announcement.user.uid
  //   : announcement.user.uid + user.uid;


const handleConversation = async () => {
  // console.log("here");
  // const response = await getDoc(doc(firestore, 'chats', mutualId));

  // if (!response.exists()) {
  //   // create chat
  //   await setDoc(doc(firestore, 'chats', mutualId), { messages: [] });

  //   await updateDoc(doc(firestore, 'userChats', loggedInUser.uid), {
  //     [`${mutualId}.userInfo`]: {
  //       uid: announcement.user.uid,
  //       displayName: announcement.user.displayName,
  //       photoURL: announcement.user.photoURL,
  //     },
  //     [`${mutualId}.date`]: serverTimestamp(),
  //     [`${mutualId}.lastMessage`]: '',
  //   });

  //   await updateDoc(doc(firestore, 'userChats', announcement.user.uid), {
  //     [`${mutualId}.userInfo`]: {
  //       uid: loggedInUser.uid,
  //       displayName: loggedInUser.displayName,
  //       photoURL: loggedInUser.photoURL,
  //     },
  //     [`${mutualId}.date`]: serverTimestamp(),
  //     [`${mutualId}.lastMessage`]: '',
  //   });
  // }

  prepareChat(loggedInUser, interlocutorUser, chatID).then(() =>
  navigateToChat(chatID, announcement.user, navigate, '/chat/rozmowa')
);
  // const annUser = announcement.user;

  // navigate('/chat/rozmowa', {
  //   state: {
  //     conversationId: mutualId,
  //     annUser,
  //   },
  // });
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
        {loggedInUser.uid === announcement.user.uid && (
          <IconManagementContainer>

            <TertiaryButton size="small" onClick={() => openEditModal(announcement)} variant ="dark">
            <BorderColorRoundedIcon /> Edytuj
            </TertiaryButton>
            <TertiaryButton size="small" onClick={handleRemoveAnnouncement} variant ="dark">
            <DeleteSweepRoundedIcon/> Usuń
            </TertiaryButton>

          </IconManagementContainer>
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
      {loggedInUser.uid !== announcement.user.uid && (
        <ButtonsContainer>
        {announcement.type.includes('tutor') ? (
          <>
            <PrimaryButton onClick={handleConversation} size="small" variant="purpleAccent">
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
            <PrimaryButton onClick={handleConversation} size="small" variant="yellowAccent">
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
      </ButtonsContainer>
      )}

    </AnnouncementContainer>
  );
}

export default AnnouncementCard;
