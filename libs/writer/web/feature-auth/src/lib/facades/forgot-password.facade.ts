import { Injectable } from '@angular/core';
import { ForgotPasswordGear } from '../gears/forgot-password.gear';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordFacade {
  constructor(private forgotPasswordGear: ForgotPasswordGear) {}

  confirmPasswordReset(code: string, password: string) {
    this.forgotPasswordGear.confirmPasswordReset(code, password);
  }

  sendLinkResetPassword(email: string) {
    this.forgotPasswordGear.sendLinkResetPassword(email);
  }
}
