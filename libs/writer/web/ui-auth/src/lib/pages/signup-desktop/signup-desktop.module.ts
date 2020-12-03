import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupDesktopRoutingModule } from './signup-desktop-routing.module';
import { SignupDesktopPage } from './signup-desktop.page';

@NgModule({
  declarations: [SignupDesktopPage],
  imports: [CommonModule, SignupDesktopRoutingModule],
})
export class SignupDesktopModule {}
