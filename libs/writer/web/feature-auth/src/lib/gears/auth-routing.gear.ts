import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthRoutingGear {
  // NOTE: Tại sao lại đẻ ra file này? đẻ ra file này để về sau reuse cả feature luôn, muốn sài gì thì chỉ import mỗi facade là xong
  loginCompleteRoute = '/profile';
  registerCompleteRoute = '/profile';
  constructor(
    private router: Router
  ) {
  }

  navigateAfterLoginComplete() {
    this.router.navigateByUrl(this.loginCompleteRoute);
  }

  navigateAfterRegisterComplete() {
    this.router.navigateByUrl(this.registerCompleteRoute);
  }

}
