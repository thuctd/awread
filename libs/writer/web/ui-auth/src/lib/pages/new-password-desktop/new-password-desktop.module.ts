import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPasswordDesktopRoutingModule } from './new-password-desktop-routing.module';
import { NewPasswordDesktopPage } from './new-password-desktop.page';


@NgModule({
  declarations: [NewPasswordDesktopPage],
  imports: [
    CommonModule,
    NewPasswordDesktopRoutingModule
  ]
})
export class NewPasswordDesktopModule { }
