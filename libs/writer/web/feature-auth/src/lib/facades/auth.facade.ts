import { Injectable } from '@angular/core';
import { LoginGear, LogoutGear, RegisterGear } from '../gears';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  currentUser$ = this.currentUserQuery.select();

  get currentUser() {
    return this.currentUserQuery.getValue();
  }

  constructor(
    private logoutGear: LogoutGear,
    private loginGear: LoginGear,
    private registerGear: RegisterGear,
    private currentUserQuery: CurrentUserQuery,
  ) {
  }

  logout() {
    this.logoutGear.logout();
  }

  loginEmail() {

  }

  loginSocial() {

  }

  registerEmail() {

  }

  registerSocial() {

  }

}
