import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordGear {
  constructor() { }

  confirmPasswordReset(code: string, password: string) {
    // this.firebaseAuthGear.confirmPasswordReset(code, password);
  }

  sendLinkResetPassword(email: string) {
    // this.firebaseAuthGear.sendLinkResetPassword(email);
  }
}
