import { Injectable } from '@angular/core';
import { LoginGear, LogoutGear, RegisterGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class AuthFacade {

  constructor(
    private logoutGear: LogoutGear,
    private loginGear: LoginGear,
    private registerGear: RegisterGear,
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
