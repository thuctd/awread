import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'ui-search-desktop',
  templateUrl: './search-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDesktopPage extends SearchPage { }
