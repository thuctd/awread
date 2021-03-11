import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunityPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-community-mobile',
  templateUrl: './community-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityMobilePage extends CommunityPage {}
