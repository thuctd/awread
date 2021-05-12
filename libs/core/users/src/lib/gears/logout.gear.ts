import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApolloAddon } from '../addons';
import { CurrentUserService } from '../states/current-user';
import { SnackbarsService } from '@awread/global/packages';
@Injectable({ providedIn: 'root' })
export class LogoutGear {
  constructor(
    private apolloAddon: ApolloAddon,
    private currentUserService: CurrentUserService,
    private router: Router,
    private snackbarService: SnackbarsService
  ) { }

  logout() {
    this.apolloAddon.logout();
    this.currentUserService.logout();
    window.localStorage.clear();
    this.router.navigate(['login']);
    this.snackbarService.showSuccess('Tạm biệt!');
  }
}
