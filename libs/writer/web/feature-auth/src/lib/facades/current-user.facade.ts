import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CurrentUserGear } from '../gears/current-user.gear';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {
  currentUser$ = this.currentUserQuery.currentUser$;
  constructor(
    private currentUserGear: CurrentUserGear,
    private currentUserQuery: CurrentUserQuery
  ) {}

  getCurrentUser() {
    return this.currentUserGear.getCurrentUser().pipe(
      map((res) => {
        if (res['data'] && res['data']['allGetCurrentUsers']['nodes']) {
          const user = res['data']['allGetCurrentUsers']['nodes'];
          return user;
        }
        return [];
      })
    );
  }

  updateCurrentUser(user) {
    return this.currentUserGear.update(user);
  }

  getUserId() {
    return this.currentUserQuery.getUserId();
  }
}
