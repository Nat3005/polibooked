import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';

import { getUser } from '../firebase/userService';

import { getBookedEvents } from '../firebase/eventsService';

export const useBookedEvents = (publisherID = null) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsRef = getBookedEvents(publisherID);
    const getBooked = onSnapshot(eventsRef, (querySnapshot) => {
      const promises = querySnapshot.docs.map((document) =>
        getUser(document.data().subscriberRef).then((u) => {
          const retrievedUser = {
            id: document.id,
            subscribingUser: u.data(),
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
  }, [publisherID]);

  return [events];
};
