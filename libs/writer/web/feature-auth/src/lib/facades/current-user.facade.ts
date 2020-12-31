import { Injectable } from '@angular/core';
import { CurrentUserGear } from '../gears/current-user.gear';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {
  constructor(private currentUserGear: CurrentUserGear) {}

  getCurrentUser() {
    return this.currentUserGear.getCurrentUser();
  }

  updateCurrentUser(user) {
    return this.currentUserGear.update(user);
  }
}
