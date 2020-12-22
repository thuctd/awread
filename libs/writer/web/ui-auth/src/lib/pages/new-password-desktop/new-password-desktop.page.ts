import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewPasswordPage } from '../new-password/new-password.page';

@Component({
  selector: 'page-new-password-desktop',
  templateUrl: './new-password-desktop.page.html',
  styleUrls: ['./new-password-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPasswordDesktopPage extends NewPasswordPage {}
