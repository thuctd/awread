import firebase from 'firebase/app';
import { ID } from '@datorama/akita';

export interface User {
  userid: string;
  address: string;
  dob: string;
  fullname: string;
  gender: string;
  introduce: string;
  phone: string;
  photoUrl: string;
  updatedat: Date;
  createdat: Date;
  username: string;
  website: string;
  email: string;
}

export interface UserInputMutation {
  email: string;
  displayName: string;
  emailVerified: string;
  photoUrl: string;
  password: string;
  uid: string;
  provider: string;
  address: string;
  phone: string;
  createdat: string;
}

export interface FirebaseUser {
  email: string;
  displayName: string;
  emailVerified: string | boolean;
  photoUrl: string;
  password: string;
  uid: string;
  provider: string;
  address: string;
  phone: string;
  createdat: Date;
}

export function createUserFromFirebase(user: Partial<FirebaseUser>) {
  return {
    email: user?.email ?? '',
    displayName: user?.displayName ?? '',
    emailVerified:
      user?.emailVerified || user?.emailVerified === 'true' ? true : false,
    photoUrl: user?.photoUrl ?? '',
    password: user?.password ?? '',
    uid: user?.uid,
    provider: user?.provider ?? 'email/password',
    address: user?.address ?? '',
    phone: user?.phone ?? '',
    createdat: user?.createdat ?? new Date(),
  } as FirebaseUser;
}

export function createUserObject(user: Partial<User>) {
  return {
    userid: user?.userid,
    address: user?.address ?? '',
    dob: user?.dob ?? '',
    fullname: user?.fullname ?? '',
    gender: user?.gender ?? '',
    introduce: user?.introduce ?? '',
    phone: user?.phone ?? '',
    photoUrl: user?.photoUrl ?? '',
    updatedat: user?.updatedat ?? new Date(),
    createdat: user?.createdat ?? new Date(),
    username: user?.username ?? '',
    website: user?.website ?? '',
    email: user?.email ?? '',
  } as User;
}
