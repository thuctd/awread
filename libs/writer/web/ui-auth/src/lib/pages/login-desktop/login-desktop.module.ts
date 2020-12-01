import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginDesktopRoutingModule } from './login-desktop-routing.module';
import { LoginDesktopPage } from './login-desktop.page';
import { LoginFormSection } from './sections/login-form/login-form.section';

@NgModule({
  declarations: [LoginDesktopPage, LoginFormSection],
  imports: [CommonModule, LoginDesktopRoutingModule],
})
export class LoginDesktopModule {}
