import { Directive, Injectable, OnInit } from "@angular/core";
import { ForgotPasswordFacade } from "@awread/writer/web/feature-auth";

@Injectable({
  providedIn: "root",
})
@Directive()
export class ForgotPage implements OnInit {
  constructor(private forgotFacade: ForgotPasswordFacade) { }

  ngOnInit(): void { }

  updatePassword(newPassword: string) {
    console.log("newPassword", newPassword);
    this.forgotFacade.updatePassword(newPassword);
  }
}
