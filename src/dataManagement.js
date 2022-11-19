import { useState, useEffect } from 'react';

import { getAnnouncements } from './firebase/announcementService';
import { getFaculties } from './firebase/facultiesService';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements().then((documents) => {
      const documentsList = [];
      documents.forEach((doc) => {
        documentsList.push({ id: doc.id, ...doc.data() });
      });
      setAnnouncements(documentsList);
    });
  }, []);
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
