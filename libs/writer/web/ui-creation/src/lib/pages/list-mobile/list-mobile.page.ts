import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'page-list-mobile',
  templateUrl: './list-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMobilePage extends ListPage {}
