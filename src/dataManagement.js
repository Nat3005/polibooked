import { useState, useEffect } from 'react';

import { getAnnouncements } from './firebase/announcementService';
import { getFaculties } from './firebase/facultiesService';

export const useAnnouncements = (abbreviation = null, major = null) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements(abbreviation, major).then((documents) => {
      const documentsList = [];
      documents.forEach((doc) => {
        documentsList.push({ id: doc.id, ...doc.data() });
      });
      setAnnouncements(documentsList);
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
