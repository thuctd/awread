import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'ui-list-desktop',
  templateUrl: './list-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDesktopPage extends ListPage { }
