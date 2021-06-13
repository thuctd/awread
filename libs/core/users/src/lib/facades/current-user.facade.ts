import { Injectable } from '@angular/core';
import { CurrentUserGear } from '../gears';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {
  currentUser$ = this.currentUserQuery.select();

  constructor(private currentUserGear: CurrentUserGear, public currentUserQuery: CurrentUserQuery) {}

  getCurrentUser() {
    return this.currentUserGear.getCurrentUser();
  }

  updateUser(user) {
    return this.currentUserGear.updateUser(user);
  }

  updatePersonal(user) {
    return this.currentUserGear.updatePersonal(user);
  }

  getUserId() {
    return this.currentUserQuery.getUserId();
  }

  getRegisterSocialUser() {
    return this.currentUserQuery.getValue().registerCredential.socialUser;
  }
}
