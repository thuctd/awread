import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CurrentUserState {
  key: string;
}

export function createInitialState(): CurrentUserState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-user', resettable: true })
export class CurrentUserStore extends Store<CurrentUserState> {

  constructor() {
    super(createInitialState());
  }

}
