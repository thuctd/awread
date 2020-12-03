import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'page-profile-mobile',
  templateUrl: './profile-mobile.page.html',
  styleUrls: ['./profile-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMobilePage extends ProfilePage {}
