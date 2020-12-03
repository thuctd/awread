import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'page-signin-desktop',
  templateUrl: './signin-desktop.page.html',
  styleUrls: ['./signin-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninDesktopPage extends SigninPage {}
