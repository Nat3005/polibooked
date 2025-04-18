import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getPersonalAnnouncements } from '../firebase/announcementService';

export const usePersonalAnnouncements = (userID = null) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const personalAnnouncementsRef = getPersonalAnnouncements(userID);
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
  }, [userID]);

  return [announcements];
};
