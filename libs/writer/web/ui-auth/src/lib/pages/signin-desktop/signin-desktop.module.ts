import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninDesktopRoutingModule } from './signin-desktop-routing.module';
import { SigninDesktopPage } from './signin-desktop.page';

@NgModule({
  declarations: [SigninDesktopPage],
  imports: [CommonModule, SigninDesktopRoutingModule],
})
export class SigninDesktopModule {}
