import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunityPage } from '../community/community.page';

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
export class CommunityDesktopPage extends CommunityPage { }
