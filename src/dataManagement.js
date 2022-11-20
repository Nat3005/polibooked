import { useState, useEffect } from 'react';

import { getAnnouncements } from './firebase/announcementService';
import { getFaculties } from './firebase/facultiesService';
import { getUser } from './firebase/userService';

export const useAnnouncements = (abbreviation = null, major = null) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements(abbreviation, major).then((retrievedDocuments) => {
      const promises = retrievedDocuments.docs.map((doc) =>
        getUser(doc.data().userRef).then((u) => {
          const document = { id: doc.id, user: u.data(), ...doc.data() };
          return document;
        })
      );

      Promise.all(promises).then((documentsList) => {
        setAnnouncements(documentsList);
      });
    });
  }, [abbreviation, major]);
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
