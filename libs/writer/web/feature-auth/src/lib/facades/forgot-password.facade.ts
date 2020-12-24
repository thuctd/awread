import { Injectable } from "@angular/core";
import { ForgotPasswordGear } from "../gears/forgot-password.gear";

@Injectable({ providedIn: "root" })
export class ForgotPasswordFacade {
  constructor(private forgotPasswordGear: ForgotPasswordGear) {}

  updatePassword(newPassword: string) {
    this.forgotPasswordGear.updatePassword(newPassword);
  }
}
