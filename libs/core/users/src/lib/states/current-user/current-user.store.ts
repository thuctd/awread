import { CurrentUser } from './../../models/current-user.model';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { SocialUser } from 'angularx-social-login';

export interface CurrentUserState {
  userId: string;
  updatedAt: string;
  registerCredential: {
    provider: string;
    providerId: string;
    socialUser: SocialUser;
  };
}

export function createInitialState(): CurrentUserState {
  return {
    userId: null,
    updatedAt: null,
    registerCredential: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-user', resettable: true })
export class CurrentUserStore extends Store<CurrentUserState> {
  constructor() {
    super(createInitialState());
  }

  updateCurrentUserAkita(user: CurrentUser) {
    console.log('user update store: ', user);
    return this.update((e) => ({ ...e, ...user }));
  }
}
