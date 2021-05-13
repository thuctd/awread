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
    if (localStorage.getItem('accessToken')) {
      this.authFacade.routeDefaultPage();
      return of(false);
    }
    return of(true);
  }
}
