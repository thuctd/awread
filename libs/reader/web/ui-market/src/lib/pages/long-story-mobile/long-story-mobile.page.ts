import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LongStoryPage } from '../long-story/long-story.page';

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
export class LongStoryMobilePage extends LongStoryPage { }
