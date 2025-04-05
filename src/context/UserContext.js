/* eslint-disable */
import { PropTypes } from "prop-types";
import React, { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase/init";
import { initUser } from "../firebase/userService";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const googleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.addScope(
      "https://www.googleapis.com/auth/contacts.readonly"
    );

    console.log("Logging");
    // signInWithRedirect(auth, googleProvider);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error.customData;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const stateChange = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
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
