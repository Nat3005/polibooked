import { PropTypes } from 'prop-types';
import { useContext, createContext, useEffect, useState, React } from 'react';
import {
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase/init';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const googleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const stateChange = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      stateChange();
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ googleLogIn, logOut, user }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object),
};

UserContextProvider.defaultProps = {
  children: {},
};

export const UserAuth = () => useContext(UserContext);
