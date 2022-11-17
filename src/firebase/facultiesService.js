import{
    collection, query, getDocs, orderBy
} from 'firebase/firestore';
import {firestore} from './init';
export const getFaculties = async () => {
    const facultyRef = query(
        collection(firestore, 'faculties'),
        orderBy('order')
    );

    return getDocs(facultyRef);
}