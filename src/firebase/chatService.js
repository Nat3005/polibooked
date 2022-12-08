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

  if (!response.exists()) {
    // create chat
    await setDoc(doc(firestore, 'chats', chatID), { messages: [] });

    await updateDoc(doc(firestore, 'userChats', loggedInUser.uid), {
      [`${chatID}.userInfo`]: {
        uid: interlocutorUser.uid,
        displayName: interlocutorUser.displayName,
        photoURL: interlocutorUser.photoURL,
      },
      [`${chatID}.date`]: serverTimestamp(),
      [`${chatID}.lastMessage`]: '',
    });

    await updateDoc(doc(firestore, 'userChats', interlocutorUser.uid), {
      [`${chatID}.userInfo`]: {
        uid: loggedInUser.uid,
        displayName: loggedInUser.displayName,
        photoURL: loggedInUser.photoURL,
      },
      [`${chatID}.date`]: serverTimestamp(),
      [`${chatID}.lastMessage`]: '',
    });
  }
};
