import {
  addDoc,
  serverTimestamp,
  collection,
  orderBy,
  query,
  getDocs,
  where,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { firestore, auth } from './init';

export const addAnnouncement = async (announcement) => {
  if (announcement === null) return null;

  return addDoc(collection(firestore, 'announcements'), {
    ...announcement,
    userRef: doc(firestore, 'users', auth.currentUser.uid),
    date: serverTimestamp(),
  });
};

export const editAnnouncement = async (announcement) => {
  if (announcement === null) return null;

  const announcementRef = doc(firestore, 'announcements', announcement.id);

  return updateDoc(announcementRef, {
    date: serverTimestamp(),
    ...announcement,
  });
};

export const getAnnouncements = async (abbreviation = null, major = null) => {
  const myQuery = [collection(firestore, 'announcements'), orderBy('date')];

  if (abbreviation) myQuery.push(where('abbreviation', '==', abbreviation));
  if (major) myQuery.push(where('major', '==', major));

  const announcementsRef = query(...myQuery);
  return getDocs(announcementsRef);
};
