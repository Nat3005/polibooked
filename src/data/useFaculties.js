import { useState, useEffect } from 'react';
import { getFaculties } from '../firebase/facultiesService';

export const useFaculties = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    getFaculties().then((documents) => {
      const documentsList = [];
      documents.forEach((document) => {
        documentsList.push({ id: document.id, ...document.data() });
      });
      setFaculties(documentsList);
    });
  }, []);
  return [faculties];
};
