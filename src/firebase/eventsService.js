import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
import { UserAuth } from '../context/UserContext';
import { firestore, auth } from './init';

export const addEvent = async (userEvent) => {
  if (userEvent === null) return null;

  return addDoc(collection(firestore, 'events'), {
    ...userEvent,
    publisherRef: doc(firestore, 'users', auth.currentUser.uid),
  });
};


export const getFreeEvents = async (publisherID = null) => {
  const ref = doc(firestore, 'users', publisherID);

  const myQuery = [collection(firestore, 'events'), orderBy('eventStartTime')];

  if (publisherID) myQuery.push(where('publisherRef', '==', ref));
  myQuery.push(where('subscriberRef', '==', null));

  const eventsRef = query(...myQuery);
  return getDocs(eventsRef);
};

export const getBookedEvents = async (publisherID = null) => {
  const ref = doc(firestore, 'users', publisherID);

  const myQuery = [collection(firestore, 'events'), orderBy('subscriberRef')];

  if (publisherID) myQuery.push(where('publisherRef', '==', ref));
  myQuery.push(where('subscriberRef', '!=', null));
  myQuery.push(orderBy('eventStartTime'));
  const eventsRef = query(...myQuery);
  return getDocs(eventsRef);
};

export const getSubscribedEvents = async (subscriberID = null) => {
  const ref = doc(firestore, 'users', subscriberID);
  const myQuery = [collection(firestore, 'events'), orderBy('eventStartTime')];

  if (subscriberID) myQuery.push(where('subscriberRef', '==', ref));
  const eventsRef = query(...myQuery);
  return getDocs(eventsRef);
};

export const editEvent = async (userEvent, userID) => {
  if (userEvent === null) return null;
  const eventRef = doc(firestore, 'events', userEvent.id);
  const subscriberRef = doc(firestore, 'users', userID);
  return updateDoc(eventRef, {
    subscriberRef,
    ...userEvent,
  });
};
