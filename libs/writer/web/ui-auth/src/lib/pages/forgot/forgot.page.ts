import { Directive, Injectable, OnInit } from "@angular/core";
import { ForgotPasswordFacade } from "libs/writer/web/feature-auth/src/lib/facades/forgot-password.facade";

@Injectable({
  providedIn: "root",
})
@Directive()
export class ForgotPage implements OnInit {
  constructor(private forgotFacade: ForgotPasswordFacade) {}

  ngOnInit(): void {}

  updatePassword(newPassword: string) {
    console.log("newPassword", newPassword);
    this.forgotFacade.updatePassword(newPassword);
  }
}
