import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegisterCompletePage } from '../register-complete/register-complete.page';

@Component({
  selector: 'page-register-complete-desktop',
  templateUrl: './register-complete-desktop.page.html',
  styleUrls: ['./register-complete-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterCompleteDesktopPage extends RegisterCompletePage {}
