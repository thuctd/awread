import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectedPage } from '../collected/collected.page';

@Component({
  selector: 'ui-collected-desktop',
  templateUrl: './collected-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectedDesktopPage extends CollectedPage { }
