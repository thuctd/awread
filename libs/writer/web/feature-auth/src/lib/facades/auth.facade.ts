import { Router } from '@angular/router';
import { ForgotPasswordGear } from './../gears/forgot-password.gear';
import { Injectable } from '@angular/core';
import { LoginGear, LogoutGear, RegisterGear } from '../gears';
import { BasicCredential, EmailLoginCredential, ProviderType } from '../models';
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
    private router: Router
  ) {}

  logout() {
    this.logoutGear.logout();
  }

  createAccountOnServer(user) {
    return this.registerGear.createAccountOnServer(user);
  }

  linkToProviderGoogleorFacebook(user) {
    this.registerGear.linkToProviderGoogleorFacebook(user);
  }

  loginWithRoleAdmin(credential: EmailLoginCredential) {
    this.loginGear.loginWithRoleAdmin(credential);
  }

  loginEmail(credential: EmailLoginCredential) {
    this.loginGear.loginEmail(credential);
  }

  loginSocials(providerType: ProviderType) {
    this.loginGear.loginSocial(providerType);
  }

  registerEmail(basicCredential: BasicCredential) {
    this.registerGear.registerEmail(basicCredential);
  }

  // registerSocial(providerType: ProviderType) {
  //   this.registerGear.registerSocial(providerType);
  // }
}
