import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninDesktopRoutingModule } from "./signin-desktop-routing.module";
import { SigninDesktopPage } from "./signin-desktop.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SigninDesktopBannerSection } from "./sections/signin-desktop-banner/signin-desktop-banner.section";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SigninDesktopSection } from "./sections/signin-desktop/signin-desktop.section";
import { SigninDesktopFormSection } from "./sections/signin-desktop-form/signin-desktop-form.section";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [
    SigninDesktopPage,
    SigninDesktopBannerSection,
    SigninDesktopSection,
    SigninDesktopFormSection,
  ],
  imports: [
    CommonModule,
    SigninDesktopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class SigninDesktopModule {}
