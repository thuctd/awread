import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LongStoryPage } from '../long-story/long-story.page';

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
export class LongStoryDesktopPage extends LongStoryPage { }
