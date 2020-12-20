import { AuthApi } from "./../apis/auth.api";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ForgotPasswordGear {
  constructor(private authApi: AuthApi) {}
  updatePassword(newPassword: string) {
    this.authApi.updatePassword("", newPassword, "forgot");
  }
}
