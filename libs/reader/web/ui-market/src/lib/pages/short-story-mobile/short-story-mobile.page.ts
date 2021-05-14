import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShortStoryPage } from '../short-story/short-story.page';

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
export class ShortStoryMobilePage extends ShortStoryPage { }
