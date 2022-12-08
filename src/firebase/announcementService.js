import {
  addDoc,
  serverTimestamp,
  collection,
  orderBy,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
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

export const getAnnouncements = (abbreviation = null, major = null) => {
  const myQuery = [
    collection(firestore, 'announcements'),
    orderBy('date', 'desc'),
  ];

  if (abbreviation) myQuery.push(where('abbreviation', '==', abbreviation));
  if (major) myQuery.push(where('major', '==', major));

  return query(...myQuery);
};

export const removeAnnouncement = async (announcementID) => {
  const announcementRef = doc(firestore, 'announcements', announcementID);
  return deleteDoc(announcementRef);
};
