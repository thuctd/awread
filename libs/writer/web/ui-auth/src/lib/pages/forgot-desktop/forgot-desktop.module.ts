import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotDesktopRoutingModule } from './forgot-desktop-routing.module';
import { ForgotDesktopPage } from './forgot-desktop.page';

@NgModule({
  declarations: [ForgotDesktopPage],
  imports: [CommonModule, ForgotDesktopRoutingModule],
})
export class ForgotDesktopModule {}
