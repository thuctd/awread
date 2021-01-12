import { FirebaseAuthGear } from './firebase-auth.gear';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordGear {
  constructor(private firebaseAuthGear: FirebaseAuthGear) {}

  confirmPasswordReset(code: string, password: string) {
    this.firebaseAuthGear.confirmPasswordReset(code, password);
  }

  sendLinkResetPassword(email: string) {
    this.firebaseAuthGear.sendLinkResetPassword(email);
  }
}
