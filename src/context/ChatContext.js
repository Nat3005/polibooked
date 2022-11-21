import { PropTypes } from 'prop-types';
import { useContext, useReducer, createContext, useEffect, useState, React } from 'react';
import {
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase/init';
import { initUser } from '../firebase/userService';
import { UserAuth } from './UserContext';

export const ChatContext = createContext();
 
export function ChatContextProvider({ children }) {

    const {user : loggedInUser} = UserAuth();

    const initial ={
        chatId: "null",
        user: {}
    }

    const chatReducer = (state,action) => {
        switch(action.type){
            case "changeUser":
                return{
                    user: action.payload,
                    chatId: loggedInUser.uid > action.payload.uid ? loggedInUser.uid + action.payload.uid : action.payload.uid + loggedInUser.uid,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, initial);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ChatContext.Provider value={{ data: state,dispatch}}>
      {children}
    </ChatContext.Provider>
  );
} 

export const UserChat = () => useContext(ChatContext);