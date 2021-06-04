import { Injectable } from '@angular/core';
import { ForgotPasswordApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordGear {

  constructor(
    private forgotPasswordApi: ForgotPasswordApi,
  ) {
  }

  send(email) {
    return this.forgotPasswordApi.send(email);
  }

  check(token, userId) {
    return this.forgotPasswordApi.check(token, userId);
  }

  updateNewPassword(token, userId, password) {
    return this.forgotPasswordApi.updateNewPassword(token, userId, password);
  }

}
