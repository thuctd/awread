import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'page-profile-desktop',
  templateUrl: './profile-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDesktopPage extends ProfilePage {}
