import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-register-complete-mobile',
  templateUrl: './register-complete-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteMobilePage {}
