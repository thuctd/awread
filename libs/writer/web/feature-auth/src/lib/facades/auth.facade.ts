import { Injectable } from '@angular/core';
import { LoginGear, LogoutGear, RegisterGear } from '../gears';
import { BasicCredential, EmailLoginCredential, ProviderType } from '../models';
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

  loginEmail(credential: EmailLoginCredential) {
    this.loginGear.loginEmail(credential);
  }

  loginSocial(providerType: ProviderType) {
    this.loginGear.loginSocial(providerType);
  }

  registerEmail(basicCredential: BasicCredential) {
    this.registerGear.registerEmail(basicCredential);
  }

  registerSocial(providerType: ProviderType) {
    this.registerGear.registerSocial(providerType);
  }

}
