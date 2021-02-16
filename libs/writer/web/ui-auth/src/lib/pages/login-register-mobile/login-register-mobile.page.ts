import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-login-register-mobile',
  templateUrl: './login-register-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginRegisterMobilePage {}
