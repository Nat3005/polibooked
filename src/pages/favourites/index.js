import { onSnapshot, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { UserAuth } from '../../context/UserContext';
import { firestore } from '../../firebase/init';
import { FavouritesContainer } from './FavouritesElements';

function Favourites() {
  // const [favourites, setFavourites] = useState([]);
  const [references, setReferences] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    const getReferences = () => {
      const announcementReferences = onSnapshot(
        doc(firestore, 'favourites', user.uid),
        (document) => {
          setReferences(document.data());
        }
      );
      return () => {
        announcementReferences();
      };
    };

    // eslint-disable-next-line no-unused-expressions
    user.uid && getReferences();
  }, [user.uid]);

  return <FavouritesContainer />;
}

export default Favourites;
