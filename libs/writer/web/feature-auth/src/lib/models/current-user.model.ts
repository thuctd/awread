import { ID } from '@datorama/akita';

export interface CurrentUser {
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

export function CurrentUser(params: Partial<CurrentUser>) {
  return {} as CurrentUser;
}
