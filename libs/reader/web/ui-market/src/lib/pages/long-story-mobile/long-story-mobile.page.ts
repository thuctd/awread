import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LongStoryPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-long-story-mobile',
  templateUrl: './long-story-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LongStoryMobilePage extends LongStoryPage {}
