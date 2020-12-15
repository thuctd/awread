import { Injectable } from '@angular/core';
import { CurrentUserGear } from '../gears/current-user.gear';

@Injectable({ providedIn: 'root' })
export class CurrentUserFacade {

  constructor(
    private currentUserGear: CurrentUserGear,
  ) {
  }

  getCurrentUser() {
    this.currentUserGear.get();
  }

  updateCurrentUser() {
    this.currentUserGear.update();
  }

}
