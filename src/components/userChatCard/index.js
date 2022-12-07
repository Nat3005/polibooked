import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { useNavigate } from 'react-router-dom';
import {
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import {
  PictureContainer,
  UserChatCardContainer,
  UserDataContainer,
  Picture,
  TextData,
} from './UserChatCardElements';
import { PrimaryButton } from '../buttons/ButtonElements';
import { MediumText, SmallText } from '../text/TextElements';
import { firestore } from '../../firebase/init';
import { UserAuth } from '../../context/UserContext';

function UserChatCard({ user, type, lastMsg }) {
  const navigate = useNavigate();
  const { user: loggedInUser } = UserAuth();
  if (!user) {
    return;
  }

  // TODO przeniesc handle conversation i tworzenie ID

  const mutualId =
    loggedInUser.uid > user.uid
      ? loggedInUser.uid + user.uid
      : user.uid + loggedInUser.uid;
  const handleConversation = async () => {
    const response = await getDoc(doc(firestore, 'chats', mutualId));

    if (!response.exists()) {
      // create chat
      await setDoc(doc(firestore, 'chats', mutualId), { messages: [] });

      await updateDoc(doc(firestore, 'userChats', loggedInUser.uid), {
        [`${mutualId}.userInfo`]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [`${mutualId}.date`]: serverTimestamp(),
        [`${mutualId}.lastMessage`]: '',
      });

      await updateDoc(doc(firestore, 'userChats', user.uid), {
        [`${mutualId}.userInfo`]: {
          uid: loggedInUser.uid,
          displayName: loggedInUser.displayName,
          photoURL: loggedInUser.photoURL,
        },
        [`${mutualId}.date`]: serverTimestamp(),
        [`${mutualId}.lastMessage`]: '',
      });
    }

    navigate('rozmowa', {
      state: {
        conversationId: mutualId,
        user,
      },
    });
  };


  // TO NAVIGATE PONIZEJ JEST OK
  const handleSelect = () => {
    navigate('rozmowa', {
      state: {
        conversationId: mutualId,
        user,
      },
    });
  };

  return (
    <UserChatCardContainer
      variant={type}
      onClick={type.includes('search') ? handleConversation : handleSelect}
    >
      <UserDataContainer>
        <PictureContainer variant={type}>
          <Picture src={user.photoURL} />
        </PictureContainer>
        <TextData>
          <MediumText weight="bold" variant="dark">
            {user.displayName}
          </MediumText>
          {type.includes('search') ? (
            <SmallText>{`${user.faculty} | ${user.major}`}</SmallText>
          ) : (
            <SmallText>{lastMsg}</SmallText>
          )}
          <SmallText />
        </TextData>
      </UserDataContainer>
      <PrimaryButton
        size="small"
        variant={type.includes('search') ? 'yellowAccent' : 'purpleAccent'}
        type="submit"
        style={{ justifySelf: 'flex-end' }}
      >
        <MailOutlineRoundedIcon />
      </PrimaryButton>
    </UserChatCardContainer>
  );
}

export default UserChatCard;
