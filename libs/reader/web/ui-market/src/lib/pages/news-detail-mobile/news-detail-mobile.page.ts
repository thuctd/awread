import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from '../news/news.page';

@Component({
  selector: 'ui-news-detail-mobile',
  templateUrl: './news-detail-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailMobilePage extends NewsPage { }
