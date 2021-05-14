import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from '../news/news.page';

@Component({
  selector: 'ui-news-desktop',
  templateUrl: './news-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsDesktopPage extends NewsPage { }
