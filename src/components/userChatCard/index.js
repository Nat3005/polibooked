import React, { useMemo } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useNavigate } from "react-router-dom";
import { assembleChatID, prepareChat, navigateToChat } from "../../firebase/domowUsluga";
import {
  PictureContainer,
  UserChatCardContainer,
  UserDataContainer,
  Picture,
  TextData,
} from "./UserChatCardElements";
import { PrimaryButton } from "../buttons/ButtonElements";
import { MediumText, SmallText } from "../text/TextElements";

import { UserAuth } from "../../context/UserContext";

function UserChatCard({ user: interlocutorUser, type, lastMsg }) {
  const navigate = useNavigate();
  const { user: loggedInUser } = UserAuth();

  if (!interlocutorUser) {
    return;
  }

  // TODO przeniesc handle conversation i tworzenie ID

  // const mutualId =
  //   loggedInUser.uid > user.uid
  //     ? loggedInUser.uid + user.uid
  //     : user.uid + loggedInUser.uid;

  const chatID = useMemo(
    () => assembleChatID(loggedInUser, interlocutorUser),
    [loggedInUser, interlocutorUser]
  );

  const handleConversation = async () => {
    prepareChat(loggedInUser, interlocutorUser, chatID).then(() =>
      navigateToChat(chatID, interlocutorUser, navigate)
    );
  };

  // navigate("rozmowa", {
  //   state: {
  //     conversationId: mutualId,
  //     user,
  //   },
  // });
  // };

  // TO NAVIGATE PONIZEJ JEST OK
  const handleSelect = () => {
    // navigate("rozmowa", {
    //   state: {
    //     conversationId: mutualId,
    //     user,
    //   },
    // });
    navigateToChat(chatID, interlocutorUser, navigate, "rozmowa")
  };

  return (
    <UserChatCardContainer
      variant={type}
      onClick={type.includes("search") ? handleConversation : handleSelect}
    >
      <UserDataContainer>
        <PictureContainer variant={type}>
          <Picture src={interlocutorUser.photoURL} />
        </PictureContainer>
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
