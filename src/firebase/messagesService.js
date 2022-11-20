// export const useMessages = () => {
//     const [messages, setMessages] =  useState([]);

import { onSnapshot, query, collection, orderBy } from 'firebase/firestore';
import { firestore } from './init';

//     useEffect(() => {
//       const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
//       const getMessages = onSnapshot(q, (querySnapshot) => {
//         const chatMessages = [];
//         querySnapshot.forEach((doc) => {
//           chatMessages.push({ ...doc.data(), id: doc.id });
//         });
//         setMessages(chatMessages);
//       });
//     }, []);
//     return [messages];
//   }

export const getMessages = async () => {
  const messageRef = query(
    collection(firestore, 'messages'),
    orderBy('timestamp')
  );
  return onSnapshot(messageRef);
};
