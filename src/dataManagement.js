import { useState, useEffect } from 'react';

import { getAnnouncements } from './firebase/announcementService';
import { getFaculties } from './firebase/facultiesService';
import { getUser } from './firebase/userService';

export const useAnnouncements = (abbreviation = null, major = null) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements(abbreviation, major).then((documents) => {
      const documentsList = [];
      documents.forEach((doc) => {
        const document = { id: doc.id, ...doc.data() };
        getUser(document.userRef).then((u) => {
          document.user = u.data();
        });
        console.warn({ document }); // eslint-disable-line no-console
        documentsList.push(document);
      });
      setAnnouncements(documentsList);
    });
  }, [abbreviation, major]);
  console.log({ announcements }); // eslint-disable-line no-console
  return [announcements];
};

export const useFaculties = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    getFaculties().then((documents) => {
      const documentsList = [];
      documents.forEach((doc) => {
        documentsList.push({ id: doc.id, ...doc.data() });
      });
      setFaculties(documentsList);
    });
  }, []);
  return [faculties];
};
