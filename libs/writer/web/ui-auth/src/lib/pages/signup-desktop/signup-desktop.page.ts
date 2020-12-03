import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'page-signup-desktop',
  templateUrl: './signup-desktop.page.html',
  styleUrls: ['./signup-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupDesktopPage extends SignupPage {}
