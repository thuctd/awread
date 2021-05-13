import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthRoutingGear {
  loginCompleteRoute = '/profile';
  registerCompleteRoute = '/profile';
  constructor(private router: Router) { }

  navigateAfterRegisterComplete(router: string) {
    this.router.navigateByUrl(router);
  }

  navigateAfterLoginComplete(router: string = 'profile', params?) {
    if (params) {
      // pass object len url thi moi gia tri deu la string, emailVerified se nhan string la 'true'
      this.router.navigate([router, params]);
    } else {
      this.router.navigate([router]);
    }
  }
}
