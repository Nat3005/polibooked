import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getPersonalAnnouncements } from '../firebase/announcementService';

export const usePersonalAnnouncements = (userID = null) => {
  const [announcements, setAnnouncements] = useState([]);
  const personalAnnouncementsRef = getPersonalAnnouncements(userID);

  useEffect(() => {
    const getAnnouncements = onSnapshot(
      personalAnnouncementsRef,
      (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setAnnouncements(docs);
      }
    );
    return () => {
      getAnnouncements();
    };
  }, [personalAnnouncementsRef, userID]);

  return [announcements];
};
