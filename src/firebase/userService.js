import {
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { firestore } from "./init";

export const initUser = async (user) => {
  if (user === null) return null;

  const docRef = doc(firestore, "users", user.uid);
  const chatRef = doc(firestore, "userChats", user.uid);
  const favouritesRef = doc(firestore, "favourites", user.uid);
  const document = await getDoc(docRef);

  if (!document.exists()) {
    const defaultData = {
      displayName: user.displayName,
      authProvider: "google",
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };
    const favouritesData = {
      favourites: [],
    };
    await setDoc(docRef, defaultData);
    await setDoc(chatRef, {});
    await setDoc(favouritesRef, favouritesData);
    return defaultData;
  }
  return document.data();
};

export const getUser = (userRef) => getDoc(userRef);

export const getSearchedUsers = async (username) => {
  const userRef = query(
    collection(firestore, "users"),
    where("displayName", "==", username)
  );
  const usersList = [];
  const foundUsers = await getDocs(userRef);

  foundUsers.forEach((u) => {
    usersList.push(u.data());
  });
  return usersList;
};
