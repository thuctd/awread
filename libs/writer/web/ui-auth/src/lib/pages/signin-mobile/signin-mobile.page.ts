import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'page-signin-mobile',
  templateUrl: './signin-mobile.page.html',
  styleUrls: ['./signin-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninMobilePage extends SigninPage {}
