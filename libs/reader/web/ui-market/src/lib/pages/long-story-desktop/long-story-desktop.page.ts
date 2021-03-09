import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LongStoryPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-long-story-desktop',
  templateUrl: './long-story-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LongStoryDesktopPage extends LongStoryPage {}
