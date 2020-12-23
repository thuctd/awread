import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCompleteDesktopRoutingModule } from './register-complete-desktop-routing.module';
import { RegisterCompleteDesktopPage } from './register-complete-desktop.page';

@NgModule({
  declarations: [RegisterCompleteDesktopPage],
  imports: [BrowserModule, CommonModule, RegisterCompleteDesktopRoutingModule],
})
export class RegisterCompleteDesktopModule {}
