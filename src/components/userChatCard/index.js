import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { useNavigate } from 'react-router-dom';
import {
  PictureContainer,
  UserChatCardContainer,
  UserDataContainer,
  Picture
} from './UserChatCardElements';
import { PrimaryButton } from '../buttons/ButtonElements';
import { MediumText, SmallText } from '../text/TextElements';
import { firestore } from '../../firebase/init';
import { UserAuth } from '../../context/UserContext';
import { getDoc, serverTimestamp, setDoc, updateDoc,doc } from 'firebase/firestore';

function UserChatCard({user}) {
  const navigate = useNavigate();
  const {user: loggedInUser} = UserAuth();
  console.log(loggedInUser);
  const handleConversation = async () => {

    const mutualId = loggedInUser.uid > user.uid ? loggedInUser.uid + user.uid : user.uid + loggedInUser.uid;
    
    const response = await getDoc(doc(firestore,'chats', mutualId));

    if(!response.exists()){
      //create chat 
      await setDoc(doc (firestore,'chats',mutualId),{messages:[]});
      
      await updateDoc(doc(firestore,'userChats', loggedInUser.uid),{
        [mutualId+".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        },
        [mutualId+".date"]: serverTimestamp()
      });

      await updateDoc(doc(firestore,'userChats', user.uid),{
        [mutualId+".userInfo"]: {
          uid: loggedInUser.uid,
          displayName: loggedInUser.displayName,
          photoURL: loggedInUser.photoURL
        },
        [mutualId+".date"]: serverTimestamp()
      });
    }

    //[1:33:45 -> uid bedzie podawany do konwersacji jako propsy]
    navigate('conversation');
  };

  return (
    <UserChatCardContainer onClick={handleConversation}>
      <PictureContainer><Picture src={user.photoURL}/></PictureContainer>
      <UserDataContainer>
        <MediumText weight="bold" variant="dark">
          {user.displayName}
        </MediumText>
        <SmallText>
        {`${user.faculty} | ${user.major}`}
        </SmallText>
      </UserDataContainer>
      <PrimaryButton size="small" variant="yellowAccent" type="submit">
        <MailOutlineRoundedIcon />
      </PrimaryButton>
    </UserChatCardContainer>
  );
}

export default UserChatCard;
