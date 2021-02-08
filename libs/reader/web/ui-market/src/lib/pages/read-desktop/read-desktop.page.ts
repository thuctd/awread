import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReadPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-read-desktop',
  templateUrl: './read-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadDesktopPage extends ReadPage {}
