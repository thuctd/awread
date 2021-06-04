import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('login guard');
    if (localStorage.getItem('accessToken')) {
      return of(true);
    }
    console.log('not allow, go login');
    this.router.navigate(['login']);
    return of(false);
  }
}
