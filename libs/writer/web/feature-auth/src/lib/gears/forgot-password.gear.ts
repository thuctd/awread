import { FirebaseAuthAddon } from './../addons/firebase-auth.addon';
import { AuthApi } from './../apis/auth.api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordGear {
  constructor(
    private authApi: AuthApi,
    private firebaseAuthAddon: FirebaseAuthAddon
  ) {}

  confirmPasswordReset(code: string, password: string) {
    this.firebaseAuthAddon.confirmPasswordReset(code, password);
  }

  sendLinkResetPassword(email: string) {
    this.firebaseAuthAddon.sendLinkResetPassword(email);
  }
}
