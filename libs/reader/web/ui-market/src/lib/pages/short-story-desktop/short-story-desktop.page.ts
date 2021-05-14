import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShortStoryPage } from '../short-story/short-story.page';

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
export class ShortStoryDesktopPage extends ShortStoryPage { }
