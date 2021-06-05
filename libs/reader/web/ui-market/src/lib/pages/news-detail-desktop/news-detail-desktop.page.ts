import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsDetailPage } from '../news-detail/news-detail.page';

@Component({
  selector: 'page-news-detail-desktop',
  templateUrl: './news-detail-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailDesktopPage extends NewsDetailPage {}
