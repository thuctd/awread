import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShortStoryPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-short-story-desktop',
  templateUrl: './short-story-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortStoryDesktopPage extends ShortStoryPage {}
