import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { useNavigate } from 'react-router-dom';
import {
  PictureContainer,
  UserChatCardContainer,
  UserDataContainer,
} from './UserChatCardElements';
import { PrimaryButton } from '../buttons/ButtonElements';
import { MediumText, SmallText } from '../text/TextElements';

function UserChatCard() {
  const navigate = useNavigate();

  const handleConversation = () => {
    navigate('conversation');
  };

  return (
    <UserChatCardContainer onClick={handleConversation}>
      <PictureContainer>{/* <Picture src={}> */}</PictureContainer>
      <UserDataContainer>
        <MediumText weight="bold" variant="dark">
          Natalia Rusin
        </MediumText>
        <SmallText>
          Informatyka Techniczna | Wydział Informatyki i Telekomunikacji
        </SmallText>
      </UserDataContainer>
      <PrimaryButton size="small" variant="yellowAccent" type="submit">
        <MailOutlineRoundedIcon />
      </PrimaryButton>
    </UserChatCardContainer>
  );
}

export default UserChatCard;
