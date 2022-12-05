import { collection, query, getDocs, orderBy, onSnapshot } from 'firebase/firestore';
import { firestore } from './init';

// export const getFaculties = async () => {
//   const facultyRef = query(
//     collection(firestore, 'faculties'),
//     orderBy('order')
//   );

//   return getDocs(facultyRef);
// };

export const getFaculties = async () => {
  const facultyRef = query(
        collection(firestore, 'faculties'),
        orderBy('order')
      );

      const func = onSnapshot(
        facultyRef,
        (document) => {
          setChats(document.data());
        }
      );

      return () => {
        func();
      };
}
