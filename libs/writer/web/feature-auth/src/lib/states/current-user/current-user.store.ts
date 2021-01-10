import { User } from './../../models/current-user.model';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CurrentUserState {
  userid: string;
}

export function createInitialState(): CurrentUserState {
  return {
    userid: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-user', resettable: true })
export class CurrentUserStore extends Store<CurrentUserState> {
  constructor() {
    super(createInitialState());
  }

  updateCurrentUserAkita(user: User) {
    console.log('user update store: ', user);
    return this.update((e) => ({ ...e, ...user }));
  }
}
