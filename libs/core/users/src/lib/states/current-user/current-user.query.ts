import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentUserStore, CurrentUserState } from './current-user.store';

@Injectable({ providedIn: 'root' })
export class CurrentUserQuery extends Query<CurrentUserState> {

  constructor(protected store: CurrentUserStore) {
    super(store);
  }

  getTerms() {
    return this.getValue().terms;
  }

  getRole() {
    return this.getValue().role;
  }

  getUserId() {
    return this.getValue().userId;
  }

  selectUserId() {
    return this.select((e) => e.userId);
  }
}
