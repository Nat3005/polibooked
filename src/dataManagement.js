import { useState, useEffect } from 'react';
import { collection, orderBy, query, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAnnouncements } from './firebase/announcementService';
import { getFaculties } from './firebase/facultiesService';
import { firestore } from './firebase/init';
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

export const useMessages = () => {
  const [messages, setMessages] =  useState([]);

  useEffect(() => {
    const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
    const getMessages = onSnapshot(q, (querySnapshot) => {
      const chatMessages = [];
      querySnapshot.forEach((doc) => {
        chatMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(chatMessages);
    });
  }, []);
  return [messages]
}