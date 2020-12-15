import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentUserStore, CurrentUserState } from './current-user.store';

@Injectable({ providedIn: 'root' })
export class CurrentUserQuery extends Query<CurrentUserState> {

  constructor(protected store: CurrentUserStore) {
    super(store);
  }

}
