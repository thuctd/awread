import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthRoutingGear {
  loginCompleteRoute = '/profile';
  registerCompleteRoute = '/profile';
  constructor(private router: Router) {}

  navigateAfterRegisterComplete(router: string) {
    this.router.navigateByUrl(router);
  }

  navigateAfterLoginComplete(router: string, params?) {
    if (params) {
      this.router.navigate([router], params);
    } else {
      this.router.navigate([router]);
    }
  }
}
