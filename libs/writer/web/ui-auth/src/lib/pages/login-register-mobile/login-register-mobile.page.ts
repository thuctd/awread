import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginRegisterPage } from '../login-register/login-register.page';

@Component({
  selector: 'page-login-register-mobile',
  templateUrl: './login-register-mobile.page.html',
  styleUrls: ['./login-register-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginRegisterMobilePage extends LoginRegisterPage {}
