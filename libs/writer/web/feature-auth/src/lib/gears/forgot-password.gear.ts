import { FirebaseAuthGear } from './firebase-auth.gear';
// TODO: import apus only
import { AuthApi } from './../apis/auth.api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordGear {
  constructor(
    private authApi: AuthApi,
    private firebaseAuthGear: FirebaseAuthGear
  ) { }

  confirmPasswordReset(code: string, password: string) {
    this.firebaseAuthGear.confirmPasswordReset(code, password);
  }

  sendLinkResetPassword(email: string) {
    this.firebaseAuthGear.sendLinkResetPassword(email);
  }
}
