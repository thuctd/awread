import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApolloAuthAddon, FirebaseAuthAddon } from '../addons';
import { CurrentUserService } from '../states/current-user';
import { SnackbarsService } from '@awread/global/packages';
@Injectable({ providedIn: 'root' })
export class LogoutGear {
  constructor(
    private apolloAuthAddon: ApolloAuthAddon,
    private firebaseAuthAddon: FirebaseAuthAddon,
    private currentUserService: CurrentUserService,
    private router: Router,
    private snackbarService: SnackbarsService
  ) {}

  logout() {
    this.apolloAuthAddon.logout();
    this.firebaseAuthAddon.logout();
    this.currentUserService.logout();
    window.localStorage.clear();
    this.router.navigate(['login']);
    this.snackbarService.showSuccess('Đăng xuất thành công!');
  }
}
