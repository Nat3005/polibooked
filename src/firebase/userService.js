import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from './init';

export const initUser = async (user) => {
  if (user === null) return null;

  const docRef = doc(firestore, 'users', user.uid);
  const chatRef = doc(firestore, 'userChats', user.uid);
  const document = await getDoc(docRef);
  if (!document.exists()) {
    const defaultData = {
      displayName: user.displayName,
      authProvider: 'google',
      email: user.email,
      photoURL: user.photoURL,
      faculty: 'Wydział Informatyki i Telekomunikacji',
      major: 'Informatyka Techniczna',
      cost: 'free',
      description:
        'I am like the water when your ship rolled in that night. Rough on the surface, but you cut through like a knife. I never would have known from that look on you.',
      tags: [
        'React.js',
        'Design',
        'Front-end',
        'HTML',
        'CSS',
        'Figma',
        'JavaScript',
      ],
      uid: user.uid,
    };
    await setDoc(docRef, defaultData);
    // return defaulData to not wait for retrieving
    await setDoc(chatRef,{});
    return defaultData;
  }
  return document.data();
};

export const getUser = (userRef) => getDoc(userRef);
