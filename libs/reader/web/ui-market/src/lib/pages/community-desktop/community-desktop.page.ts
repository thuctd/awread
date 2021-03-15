import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunityPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-community-desktop',
  templateUrl: './community-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityDesktopPage extends CommunityPage {}
