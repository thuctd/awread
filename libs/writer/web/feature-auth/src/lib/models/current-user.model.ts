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
  photourl: string;
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
  photoURL: string;
  password: string;
  uid: string;
  provider: string;
  address: string;
  phone: string;
  createdat: string;
}

export interface FirebaseUser {
  displayName: string;
  email: string;
  emailVerified: string;
  photoUrl: string;
  uid: string;
  provider: string;
  address: string;
  phone: string;
}

export function createUserFirebase(user: Partial<FirebaseUser>) {
  return {
    displayName: user.displayName ?? '',
    email: user.email ?? '',
    emailVerified: user?.emailVerified.toString() ?? 'false',
    photoUrl: user.photoUrl ?? '',
    uid: user.uid,
    provider: user.provider ?? 'email/password',
    address: user.address ?? '',
    phone: user.phone ?? '',
  } as FirebaseUser;
}

export function createUserObject(user: Partial<User>) {
  return {
    userid: user.userid,
    address: user.address ?? '',
    dob: user.dob ?? '',
    fullname: user.fullname ?? '',
    gender: user.gender ?? '',
    introduce: user.introduce ?? '',
    phone: user.phone ?? '',
    photourl: user.photourl ?? '',
    updatedat: user.updatedat ?? new Date(),
    createdat: user.createdat ?? new Date(),
    username: user.username ?? '',
    website: user.website ?? '',
  } as User;
}
