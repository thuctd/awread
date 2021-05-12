import { Injectable } from '@angular/core';
import { CurrentUserGear, LoginGear, LogoutGear, RegisterGear } from '../gears';
import { CreateUserCredential } from '../models';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  currentUser$ = this.loginGear.getCurrentUser();

  get currentUser() {
    return this.currentUserQuery.getValue();
  }

  constructor(
    private logoutGear: LogoutGear,
    private loginGear: LoginGear,
    private registerGear: RegisterGear,
    private currentUserQuery: CurrentUserQuery,
    private currentUserGear: CurrentUserGear,
  ) { }

  logout() {
    this.logoutGear.logout();
  }

  linkSocial(provider) {
    this.currentUserGear.linkSocial(provider);
  }

  updateUser(user) {
    return this.currentUserGear.update(user);
  }

  loginEmail(credential) {
    this.loginGear.loginEmail(credential);
  }

  loginSocial(providerType) {
    this.loginGear.loginSocial(providerType);
  }

  registerEmail(basicCredential: CreateUserCredential) {
    this.registerGear.registerEmail(basicCredential);
  }
}
