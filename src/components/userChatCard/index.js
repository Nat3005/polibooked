import React, { useMemo } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useNavigate } from "react-router-dom";
import { assembleChatID, prepareChat, navigateToChat } from "../../firebase/chatService";
import {
  UserChatCardContainer,
  UserDataContainer,
  TextData,
} from "./UserChatCardElements";
import { PrimaryButton } from "../buttons/ButtonElements";
import { MediumText, SmallText } from "../text/TextElements";
import UserPicture from "../userPicture";
import { UserAuth } from "../../context/UserContext";

function UserChatCard({ user: interlocutorUser, type, lastMsg }) {
  const navigate = useNavigate();
  const { user: loggedInUser } = UserAuth();

  if (!interlocutorUser) {
    return;
  }

  const chatID = useMemo(
    () => assembleChatID(loggedInUser, interlocutorUser),
    [loggedInUser, interlocutorUser]
  );

  const handleConversation = async () => {
    prepareChat(loggedInUser, interlocutorUser, chatID).then(() =>
      navigateToChat(chatID, interlocutorUser, navigate,"rozmowa")
    );
  };

  const handleSelect = () => {
    navigateToChat(chatID, interlocutorUser, navigate, "rozmowa")
  };

  return (
    <UserChatCardContainer
      variant={type}
      onClick={type.includes("search") ? handleConversation : handleSelect}
    >
      <UserDataContainer>
      <UserPicture type={type} imageSrc={interlocutorUser.photoURL}/>
        <TextData>
          <MediumText weight="bold" variant="dark">
            {interlocutorUser.displayName}
          </MediumText>
          {type.includes("search") ? (
            <SmallText>{`${interlocutorUser.faculty} | ${interlocutorUser.major}`}</SmallText>
          ) : (
            <SmallText>{lastMsg}</SmallText>
          )}
          <SmallText />
        </TextData>
      </UserDataContainer>
      <PrimaryButton
        size="small"
        variant={type.includes("search") ? "yellowAccent" : "purpleAccent"}
        type="submit"
        style={{ justifySelf: "flex-end" }}
      >
        <MailOutlineRoundedIcon />
      </PrimaryButton>
    </UserChatCardContainer>
  );
}

export default UserChatCard;
