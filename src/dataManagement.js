import { useState, useEffect } from 'react';
import { onSnapshot, doc, getDoc, getDocs, query,collection, orderBy,where } from 'firebase/firestore';
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

/////////////////////// \/\/\/\/\\//\/ done /\/\/\\/\/\/\\/\/\///////////////////////////
export const useFreeEvents = (publisherUID) => {
  const [events, setEvents] = useState([]);
  if (publisherUID===null) return;

  const eventsRef = getFreeEvents(publisherUID);
  useEffect(() => {
    const getEvents =  onSnapshot(
      eventsRef, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc)=> {
          docs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setEvents(docs);
      }
    )
    return () => {
      getEvents();
    };
    },[publisherUID]);

  return [events];
}


/////////////////////// \/\/\/\/\\//\/ done /\/\/\\/\/\/\\/\/\///////////////////////////
export const useBookedEvents = (publisherID = null) => {
  const [events, setEvents] = useState([]);
  const eventsRef = getBookedEvents(publisherID);

  useEffect(()=> {
    const getBooked = onSnapshot( eventsRef, (querySnapshot) => {
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
    })
    }
    );
  
    return () => {
      getBooked();
    };
  },[publisherID]);

  return [events];
};

/////////////////////// \/\/\/\/\\//\/ done /\/\/\\/\/\/\\/\/\///////////////////////////
export const useSubscribedEvents = (subscriberID = null) => {
  const [events, setEvents] = useState([]);
  const eventsRef = getSubscribedEvents(subscriberID);

  useEffect(()=> {
    const getBooked = onSnapshot( eventsRef, (querySnapshot) => {
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
    })
    }
    );
  
    return () => {
      getBooked();
    };
  },[subscriberID]);

  return [events];
};



/////////////////////// \/\/\/\/\\//\/ done /\/\/\\/\/\/\\/\/\///////////////////////////
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

/////////////////////// \/\/\/\/\\//\/ done /\/\/\\/\/\/\\/\/\///////////////////////////
export const useAnnouncements = (abbreviation = null, major = null) => {
    const [announcements, setAnnouncements] = useState([]);
    const myQuery = [collection(firestore, 'announcements'),orderBy("date", "desc")];
    if (abbreviation) myQuery.push(where('abbreviation', '==', abbreviation));
    if (major) myQuery.push(where('major', '==', major));
    const announcementsRef = query(...myQuery);

  useEffect(() => {
    const getAnn = onSnapshot (
      announcementsRef, (retrievedDocuments) => {
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
      }
    );
    return () => {
      getAnn();
    };
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
