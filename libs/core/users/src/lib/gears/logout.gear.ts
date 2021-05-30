import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { ApolloAddon } from '../addons';
import { CurrentUserService } from '../states/current-user';
import { SnackbarService } from '@awread/global/packages';
import { SocialAuthService } from 'angularx-social-login';
@Injectable({ providedIn: 'root' })
export class LogoutGear {
  constructor(
    private apolloAddon: ApolloAddon,
    private currentUserService: CurrentUserService,
    private router: Router,
    private snackbarService: SnackbarService,
    private socialAuthService: SocialAuthService,
    @Inject('persistStorage') private persistStorage
  ) { }

  logout(redirect = '/login') {
    this.apolloAddon.logout();
    this.currentUserService.logout();
    window.localStorage.clear();
    this.router.navigate([redirect]);
    this.snackbarService.showSuccess('Tạm biệt!');
    try {
      this.socialAuthService.signOut(true);
    } catch (error) {
      console.warn('social signout error', error);
    }
    try {
      // Clear all
      this.persistStorage.clearStore();
    } catch (error) {
      console.warn('persist state clear failed', error);
    }
  }
}
