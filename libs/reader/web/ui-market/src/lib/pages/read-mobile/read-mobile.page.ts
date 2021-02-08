import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReadPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-read-mobile',
  templateUrl: './read-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMobilePage extends ReadPage {}
