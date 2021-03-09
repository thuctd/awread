import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewPasswordPage } from '../new-password/new-password.page';

@Component({
  selector: 'page-new-password-mobile',
  templateUrl: './new-password-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordMobilePage extends NewPasswordPage {}
