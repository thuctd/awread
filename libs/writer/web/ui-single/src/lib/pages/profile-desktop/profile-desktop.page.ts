import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'page-profile-desktop',
  templateUrl: './profile-desktop.page.html',
  styleUrls: ['./profile-desktop.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDesktopPage extends ProfilePage {}
