import {
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { firestore } from './init';

export const assembleChatID = (loggedInUser, interlocutorUser) =>
  loggedInUser.uid > interlocutorUser.uid
    ? loggedInUser.uid + interlocutorUser.uid
    : interlocutorUser.uid + loggedInUser.uid;

export const navigateToChat = (chatID, interlocutorUser, navigate, path) => {
  navigate(path, {
    state: {
      conversationId: chatID,
      user: interlocutorUser,
    },
  });
};

export const prepareChat = async (loggedInUser, interlocutorUser, chatID) => {
  const response = await getDoc(doc(firestore, 'chats', chatID));
  const loggedInUserRef = doc(firestore, 'users', loggedInUser.uid);
  const interlocutorUserRef = doc(firestore, 'users', interlocutorUser.uid);

  if (!response.exists()) {
    // create chat
    await setDoc(doc(firestore, 'chats', chatID), { messages: [] });

    await updateDoc(doc(firestore, 'userChats', loggedInUser.uid), {
      [`${chatID}.userRef`]: interlocutorUserRef,
      [`${chatID}.date`]: serverTimestamp(),
      [`${chatID}.lastMessage`]: '',
    });

    await updateDoc(doc(firestore, 'userChats', interlocutorUser.uid), {
      [`${chatID}.userRef`]: loggedInUserRef,
      [`${chatID}.date`]: serverTimestamp(),
      [`${chatID}.lastMessage`]: '',
    });
  }
};

export const getChats = (userID) => {
  const chatRef = doc(firestore, 'userChats', userID);
  return chatRef;
};
