import { Injectable } from '@angular/core';
import { CurrentUserGear } from '../gears';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {
  currentUser$ = this.currentUserQuery.select();
  constructor(
    private currentUserGear: CurrentUserGear,
    private currentUserQuery: CurrentUserQuery
  ) { }

  getCurrentUser() {
    return this.currentUserGear.getCurrentUser();
  }

  updateCurrentUser(user) {
    return this.currentUserGear.update(user);
  }

  updateName(user) {
    return this.currentUserGear.updateName(user);
  }

  getUserId() {
    return this.currentUserQuery.getUserId();
  }
}
