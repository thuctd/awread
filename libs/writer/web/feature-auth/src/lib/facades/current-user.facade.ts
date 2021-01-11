import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { CurrentUserGear } from '../gears';
// import { CurrentUserQuery } from '../states/current-user';
//TODO: sua import nhu tren
import { CurrentUserGear } from '../gears/current-user.gear';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {
  currentUser$ = this.currentUserQuery.currentUser$;
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

  getUserId() {
    return this.currentUserQuery.getUserId();
  }
}
