import { Injectable } from '@angular/core';
import { CurrentUserGear } from '../gears';
import { CurrentUserQuery, CurrentUserStore } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {
  currentUser$ = this.currentUserQuery.select();

  constructor(private currentUserGear: CurrentUserGear, public currentUserQuery: CurrentUserQuery, private currentUserStore: CurrentUserStore) { }

  agreeBecomeWriter() {
    return this.currentUserGear.agreeBecomeWriter();
  }

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

  getRegisterCredential() {
    return this.currentUserQuery.getValue().registerCredential;
  }

  setSocialCredential(value?) {
    this.currentUserStore.update({ registerCredential: value })
  }

  reset() {
    this.currentUserStore.reset();
  }
}
