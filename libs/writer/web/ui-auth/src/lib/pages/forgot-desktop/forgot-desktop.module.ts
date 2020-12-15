import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotDesktopRoutingModule } from './forgot-desktop-routing.module';
import { ForgotDesktopPage } from './forgot-desktop.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [ForgotDesktopPage],
  imports: [CommonModule, ForgotDesktopRoutingModule,FontAwesomeModule],
})
export class ForgotDesktopModule {}
