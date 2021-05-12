import { CurrentUser } from './../../models/current-user.model';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CurrentUserState {
  userId: string;
}

export function createInitialState(): CurrentUserState {
  return {
    userId: '',
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
