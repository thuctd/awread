import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninMobileRoutingModule } from "./signin-mobile-routing.module";
import { SigninMobilePage } from "./signin-mobile.page";

@NgModule({
  declarations: [SigninMobilePage],
  imports: [CommonModule, SigninMobileRoutingModule, ReactiveFormsModule],
})
export class SigninMobileModule {}
