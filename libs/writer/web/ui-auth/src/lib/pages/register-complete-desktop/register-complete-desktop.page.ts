import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegisterCompletePage } from '../register-complete/register-complete.page';

@Component({
  selector: 'page-register-complete-desktop',
  templateUrl: './register-complete-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteDesktopPage extends RegisterCompletePage {}
