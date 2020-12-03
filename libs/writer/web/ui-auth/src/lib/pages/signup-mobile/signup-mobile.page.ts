import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'page-signup-mobile',
  templateUrl: './signup-mobile.page.html',
  styleUrls: ['./signup-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupMobilePage extends SignupPage {}
