import { useState, useEffect } from 'react';
import { onSnapshot, doc, getDoc } from 'firebase/firestore';
import { getUser } from '../firebase/userService';
import { UserAuth } from '../context/UserContext';
import { firestore } from '../firebase/init';

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
