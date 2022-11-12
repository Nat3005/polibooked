import { PropTypes } from 'prop-types';
import { useContext, createContext, useEffect, useState, React } from 'react';
import {
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase/init';
import { initUser } from '../firebase/userService';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const googleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const stateChange = onAuthStateChanged(auth, (currentUser) => {
      initUser(currentUser).then((myUser) => {
        setUser(myUser);
        setLoading(false);
      });
    });
    return () => {
      stateChange();
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ googleLogIn, logOut, user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

UserContextProvider.defaultProps = {
  children: {},
};

export const UserAuth = () => useContext(UserContext);
