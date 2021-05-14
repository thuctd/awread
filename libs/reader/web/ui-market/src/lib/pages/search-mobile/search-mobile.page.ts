import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'ui-search-mobile',
  templateUrl: './search-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchMobilePage extends SearchPage { }
