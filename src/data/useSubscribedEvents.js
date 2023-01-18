import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { getUser } from '../firebase/userService';
import { getSubscribedEvents } from '../firebase/eventsService';

export const useSubscribedEvents = (subscriberID = null) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsRef = getSubscribedEvents(subscriberID);
    const getBooked = onSnapshot(eventsRef, (querySnapshot) => {
      const promises = querySnapshot.docs.map((document) =>
        getUser(document.data().publisherRef).then((u) => {
          const retrievedUser = {
            id: document.id,
            publishingUser: u.data(),
            ...document.data(),
          };
          return retrievedUser;
        })
      );
      Promise.all(promises).then((documentsList) => {
        setEvents(documentsList);
      });
    });

    return () => {
      getBooked();
    };
  }, [subscriberID]);

  return [events];
};
