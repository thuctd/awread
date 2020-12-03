import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ForgotPage } from '../forgot/forgot.page';

@Component({
  selector: 'page-forgot-desktop',
  templateUrl: './forgot-desktop.page.html',
  styleUrls: ['./forgot-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotDesktopPage extends ForgotPage {}
