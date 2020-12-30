import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterDesktopRoutingModule } from './login-register-desktop-routing.module';
import { LoginRegisterDesktopPage } from './login-register-desktop.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WriterWebUiAuthAtomicModule } from '../../atomics/writer-web-ui-auth-atomic.module';

@NgModule({
  declarations: [LoginRegisterDesktopPage],
  imports: [
    CommonModule,
    LoginRegisterDesktopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WriterWebUiAuthAtomicModule,
  ],
  exports: [LoginRegisterDesktopPage],
})
export class LoginRegisterDesktopModule { }
