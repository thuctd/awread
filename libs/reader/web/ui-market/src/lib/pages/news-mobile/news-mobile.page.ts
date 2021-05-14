import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NewsPage } from '../news/news.page';

@Component({
  selector: 'ui-news-mobile',
  templateUrl: './news-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsMobilePage extends NewsPage { }
