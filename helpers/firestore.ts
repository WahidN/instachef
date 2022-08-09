import { collection, CollectionReference, DocumentData } from 'firebase/firestore';
import { IUser } from 'utils/interfaces';
import { firestore } from '../firebase.config';

export const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(firestore, collectionName) as CollectionReference<T>;

export const userCol = createCollection<IUser>('users');
