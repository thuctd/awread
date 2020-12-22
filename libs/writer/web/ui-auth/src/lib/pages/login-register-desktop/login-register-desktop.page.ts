import { FormBuilder } from "@angular/forms";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { LoginRegisterPage } from "../login-register/login-register.page";

@Component({
  selector: "page-login-register-desktop",
  templateUrl: "./login-register-desktop.page.html",
  styleUrls: ["./login-register-desktop.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginRegisterDesktopPage extends LoginRegisterPage {}
