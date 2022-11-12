import {
  addDoc,
  serverTimestamp,
  collection,
  orderBy,
  query,
  getDocs,
} from 'firebase/firestore';
import { firestore } from './init';

export const addAnnouncement = async (announcement) => {
  if (announcement === null) return null;

  return addDoc(collection(firestore, 'announcements'), {
    ...announcement,
    date: serverTimestamp(),
  });
};

export const getAnnouncements = async () => {
  const announcementsRef = query(
    collection(firestore, 'announcements'),
    orderBy('date')
  );
  const announcements = [];
  getDocs(announcementsRef).then((snapshot) => {
    snapshot.forEach((doc) => {
      announcements.push(doc.data());
    });
  });
};
