import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getUser } from '../firebase/userService';
import { getChats } from '../firebase/chatService';

export const useChats = (userID = null) => {
  const [chats, setChats] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const chatRef = getChats(userID);

  useEffect(() => {
    const getReferences = () => {
      const chatReferences = onSnapshot(chatRef, (document) => {
        setChats(document.data());
      });
      return () => {
        chatReferences();
      };
    };

    // eslint-disable-next-line no-unused-expressions
    userID && getReferences();
  }, [userID, chatRef]);

  useEffect(() => {
    const uChats = [];
    const promises = Object.keys(chats).map((item) =>
      getUser(chats[item].userRef).then((u) => {
        const userChat = {
          ...chats[item],
          interlocutorUser: u.data(),
        };
        uChats.push(userChat);
      })
    );

    Promise.all(promises).then(() => {
      setUserChats(uChats);
    });
  }, [chats]);
  return [userChats];
};
