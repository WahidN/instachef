import { collection, CollectionReference, DocumentData } from 'firebase/firestore';
import { UserModel } from '../components/models/User';
import { firestore } from '../firebase.config';

export const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(firestore, collectionName) as CollectionReference<T>;

export const userCol = createCollection<UserModel>('users');
