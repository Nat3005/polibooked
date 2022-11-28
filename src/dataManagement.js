import { useState, useEffect } from 'react';
import { onSnapshot, doc, getDoc, getDocs } from 'firebase/firestore';
import { getAnnouncements } from './firebase/announcementService';
import { getFaculties } from './firebase/facultiesService';
import { getUser } from './firebase/userService';
import { UserAuth } from './context/UserContext';
import { firestore } from './firebase/init';
import {
  getBookedEvents,
  getFreeEvents,
  getSubscribedEvents,
} from './firebase/eventsService';

export const useFreeEvents = (publisherID = null) => {
  const [events, setEvents] = useState([]);

  console.log({publisherID})
  const [publisherUID, setPublisherUID] = useState(null);

  useEffect(() => {
    console.log({publisherUID})
    if (publisherUID===null) return;

    getFreeEvents(publisherID).then((documents) => {
      const documentsList = [];
      documents.forEach((document) => {
        documentsList.push({ id: document.id, ...document.data() });
      });

      setEvents(documentsList);
    });
  }, [publisherUID]);

  return [events, setPublisherUID];
};

export const useBookedEvents = (publisherID = null) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getBookedEvents(publisherID).then((retrievedDocuments) => {
      const promises = retrievedDocuments.docs.map((document) =>
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
  }, [publisherID]);
  return [events];
};

export const useSubscribedEvents = (subscriberID = null) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getSubscribedEvents(subscriberID).then((retrievedDocuments) => {
      const promises = retrievedDocuments.docs.map((document) =>
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
  }, [subscriberID]);
  return [events];
};

export const useFavourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [references, setReferences] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const getReferences = () => {
      const announcementReferences = onSnapshot(
        doc(firestore, 'favourites', user.uid),
        (document) => {
          setReferences(document.data().favourites);
        }
      );
      return () => {
        announcementReferences();
      };
    };

    // eslint-disable-next-line no-unused-expressions
    user.uid && getReferences();
  }, [user.uid]);

  useEffect(() => {
    const fetchedAnnouncements = [];
    const favouritesPromises = references.map((reference) => getDoc(reference));
    Promise.all(favouritesPromises).then((favors) => {
      const userPromises = favors.map((document) =>
        getUser(document.data().userRef).then((u) => {
          const announcement = {
            id: document.id,
            user: u.data(),
            ...document.data(),
          };
          fetchedAnnouncements.push(announcement);
        })
      );
      Promise.all(userPromises).then(() => {
        setFavourites(fetchedAnnouncements);
      });
    });
  }, [references]);

  return [favourites];
};

export const useAnnouncements = (abbreviation = null, major = null) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements(abbreviation, major).then((retrievedDocuments) => {
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
  }, [abbreviation, major]);
  return [announcements];
};

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
