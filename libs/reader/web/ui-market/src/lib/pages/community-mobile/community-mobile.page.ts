import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunityPage } from '../community/community.page';

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
export class CommunityMobilePage extends CommunityPage { }
