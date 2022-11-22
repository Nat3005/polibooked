import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from './init';

export const initUser = async (user) => {
  if (user === null) return null;

  const docRef = doc(firestore, 'users', user.uid);
  const chatRef = doc(firestore, 'userChats', user.uid);
  const favouritesRef = doc(firestore, 'favourites', user.uid);
  const document = await getDoc(docRef);
  if (!document.exists()) {
    const defaultData = {
      displayName: user.displayName,
      authProvider: 'google',
      email: user.email,
      photoURL: user.photoURL,
      faculty: 'Placeholder na wydział',
      major: 'Placeholder na kierunek',
      description:
        'Hiding behind the couch until lured out by a feathery toy murr i hate humans they are so annoying purr purr purr until owner pets why owner not pet me hiss scratch meow, yet sitting in a box for find empty spot in cupboard and sleep all day.',
      tags: ['tag', 'troche dłuższy tag', 'krótki tag', 'drugi tag'],
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
