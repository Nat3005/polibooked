import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcw7imewX2x3OEfd3VzuS_deaKA9gROwU',
  authDomain: 'polibooked.firebaseapp.com',
  projectId: 'polibooked',
  storageBucket: 'polibooked.firebasestorage.app',
  messagingSenderId: '838602875476',
  appId: '1:838602875476:web:4ccbec4d691dec156283c1',
  measurementId: 'G-2EXVZ9DD11',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
