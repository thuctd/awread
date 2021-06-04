import { Injectable } from '@angular/core';
import { ForgotPasswordGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordFacade {

  constructor(
    private forgotPasswordGear: ForgotPasswordGear,
  ) {
  }

  send(email) {
    return this.forgotPasswordGear.send(email);
  }

  check(token, userId) {
    return this.forgotPasswordGear.check(token, userId);
  }

  updateNewPassword(token, userId, password) {
    return this.forgotPasswordGear.updateNewPassword(token, userId, password);
  }

}
