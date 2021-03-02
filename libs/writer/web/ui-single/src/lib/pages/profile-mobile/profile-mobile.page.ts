import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'page-profile-mobile',
  templateUrl: './profile-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMobilePage extends ProfilePage {}
