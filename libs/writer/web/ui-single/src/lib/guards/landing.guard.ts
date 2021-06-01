import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthFacade } from '@awread/core/users';

import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LandingGuard implements CanActivate {
  constructor(
    private authFacade: AuthFacade,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('landing guard');
    if (localStorage.getItem('accessToken')) {
      console.log('have accessToken', localStorage.getItem('accessToken'));
      this.authFacade.routeDefaultPage();
      return of(false);
    }
    console.log('no accessToken, allow to go', route, state);
    return of(true);
  }
}
