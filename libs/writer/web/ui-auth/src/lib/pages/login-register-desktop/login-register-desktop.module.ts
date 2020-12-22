import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRegisterDesktopRoutingModule } from "./login-register-desktop-routing.module";
import { LoginRegisterDesktopPage } from "./login-register-desktop.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginRegisterDesktopPage],
  imports: [
    CommonModule,
    LoginRegisterDesktopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginRegisterDesktopPage],
})
export class LoginRegisterDesktopModule {}
