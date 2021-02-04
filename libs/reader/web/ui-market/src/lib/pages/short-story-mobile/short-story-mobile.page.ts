import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShortStoryPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-short-story-mobile',
  templateUrl: './short-story-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortStoryMobilePage extends ShortStoryPage {}
