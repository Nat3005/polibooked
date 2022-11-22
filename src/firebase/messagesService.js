import { onSnapshot, query, collection, orderBy } from 'firebase/firestore';
import { firestore } from './init';

export const getMessages = async () => {
  const messageRef = query(
    collection(firestore, 'messages'),
    orderBy('timestamp')
  );
  return onSnapshot(messageRef);
};
