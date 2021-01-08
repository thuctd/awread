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
  // TODO: tại sao lúc thì photoUrl lúc thì photoURL lúc thì photourl
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
  // TODO: tại sao lúc thì photoUrl lúc thì photoURL lúc thì photourl
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
  // TODO: tại sao lúc thì photoUrl lúc thì photoURL lúc thì photourl
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
    // TODO: tại sao lúc thì photoUrl lúc thì photoURL lúc thì photourl
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
    // TODO: tại sao lúc thì photoUrl lúc thì photoURL lúc thì photourl
    photourl: user.photourl ?? '',
    updatedat: user.updatedat ?? new Date(),
    createdat: user.createdat ?? new Date(),
    username: user.username ?? '',
    website: user.website ?? '',
  } as User;
}

export function newUser(user: Partial<UserInputMutation>) {
  return {
    email: user.email ?? null,
    fullname: user.displayName ?? null,
    // TODO: tại sao là 'false' mà không phải fase boolean ? giờ check ở client thì check emailVerified === 'true' à ?
    emailVerified: user.emailVerified ?? 'false',
    // TODO: tại sao lúc thì photoUrl lúc thì photoURL lúc thì photourl
    photourl: user.photoURL ?? null,
    password: user.password ?? '',
    userid: user.uid,
    provider: user.provider ?? 'email/password',
    address: user.address ?? '',
    phone: user.phone ?? '',
    createdat: new Date(), // TODO: tại sao emailVerified thì viết hoa chữ V mà createat thì ko viết hoa chữ A ????
  };
}
