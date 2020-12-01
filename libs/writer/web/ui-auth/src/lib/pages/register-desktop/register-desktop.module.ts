import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDesktopRoutingModule } from './register-desktop-routing.module';
import { RegisterDesktopPage } from './register-desktop.page';

@NgModule({
  declarations: [RegisterDesktopPage],
  imports: [CommonModule, RegisterDesktopRoutingModule],
})
export class RegisterDesktopModule {}
