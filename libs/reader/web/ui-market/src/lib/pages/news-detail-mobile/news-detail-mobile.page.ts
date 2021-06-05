import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsDetailPage } from '../news-detail/news-detail.page';

@Component({
  selector: 'page-news-detail-mobile',
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
export class NewsDetailMobilePage extends NewsDetailPage {}
