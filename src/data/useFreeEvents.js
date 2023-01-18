import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getFreeEvents } from '../firebase/eventsService';

export const useFreeEvents = (publisherUID) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsRef = getFreeEvents(publisherUID);
    const getEvents = onSnapshot(eventsRef, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setEvents(docs);
    });
    return () => {
      getEvents();
    };
  }, [publisherUID]);

  return [events];
};
