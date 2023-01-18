import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getAnnouncements } from '../firebase/announcementService';
import { getUser } from '../firebase/userService';

export const useAnnouncements = (abbreviation = null, major = null) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const announcementsRef = getAnnouncements(abbreviation, major);
    const getAnn = onSnapshot(announcementsRef, (retrievedDocuments) => {
      const promises = retrievedDocuments.docs.map((document) =>
        getUser(document.data().userRef).then((u) => {
          const retrievedUser = {
            id: document.id,
            user: u.data(),
            ...document.data(),
          };
          return retrievedUser;
        })
      );

      Promise.all(promises).then((documentsList) => {
        setAnnouncements(documentsList);
      });
    });
    return () => {
      getAnn();
    };
  }, [abbreviation, major]);
  return [announcements];
};
