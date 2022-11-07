import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from './init';

export const initUser = async (user) => {
  if (user == null) return null;

  const docRef = doc(firestore, 'users', user.uid);
  const document = await getDoc(docRef);
  if (!document.exists()) {
    const defaultData = {
      displayName: user.displayName,
      authProvider: 'google',
      email: user.email,
      roles: ['admin', 'jedi'],
      uid: user.uid,
    };
    await setDoc(docRef, defaultData);
    // return defaulData to not wait for retrieving
    return defaultData;
  }
  return document.data();
};
