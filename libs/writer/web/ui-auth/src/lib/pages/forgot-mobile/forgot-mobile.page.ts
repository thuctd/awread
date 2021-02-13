import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ForgotPage } from '../forgot/forgot.page';

@Component({
  selector: 'page-forgot-mobile',
  templateUrl: './forgot-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotMobilePage extends ForgotPage {}
