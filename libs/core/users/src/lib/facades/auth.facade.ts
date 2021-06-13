import { Injectable } from '@angular/core';
import { AuthRoutingGear, CurrentUserGear, LoginGear, LogoutGear, RegisterGear } from '../gears';
import { CreateUserCredential } from '../models';
import { CurrentUserQuery } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  currentUser$ = this.currentUserQuery.select();
  isLogin$ = this.currentUserQuery.select((state) => !!state.userId);
  get currentUser() {
    return this.currentUserQuery.getValue();
  }

  constructor(
    private logoutGear: LogoutGear,
    private loginGear: LoginGear,
    private registerGear: RegisterGear,
    private currentUserQuery: CurrentUserQuery,
    private currentUserGear: CurrentUserGear,
    private authRoutingGear: AuthRoutingGear
  ) {}

  connectProviderAndGoToRegister(provider) {
    this.registerGear.connectProviderAndGoToRegister(provider);
  }

  logout(redirectLink?) {
    this.logoutGear.logout(redirectLink);
  }

  async connectSocialNewAccount(provider) {
    return this.currentUserGear.connectSocialNewAccount(provider);
  }

  linkSocial(provider) {
    this.currentUserGear.linkSocial(provider);
  }

  updateUser(user) {
    return this.currentUserGear.updateUser(user);
  }

  loginEmail(credential) {
    this.loginGear.loginEmail(credential);
  }

  loginSocial(providerType) {
    this.loginGear.loginSocial(providerType);
  }

  routeDefaultPage() {
    this.authRoutingGear.navigateAfterLoginComplete();
  }

  createNewAccount(requiredForm, optionalForm, experienceForm) {
    this.registerGear.connectProviderAndGoToRegister;
  }
}
