import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ForgotPage } from '../forgot/forgot.page';

@Component({
  selector: 'page-forgot-mobile',
  templateUrl: './forgot-mobile.page.html',
  styleUrls: ['./forgot-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotMobilePage extends ForgotPage {}
