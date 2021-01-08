import { Injectable } from '@angular/core';
import { ApolloAuthAddon, FirebaseAuthAddon } from '../addons';
import { CurrentUserService } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class LogoutGear {
  constructor(
    private apolloAuthAddon: ApolloAuthAddon,
    private firebaseAuthAddon: FirebaseAuthAddon,
    private currentUserService: CurrentUserService
  ) {}

  logout() {
    this.apolloAuthAddon.logout();
    this.firebaseAuthAddon.logout();
    this.currentUserService.logout();
    localStorage.removeItem('token');
  }
}
