import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReadPage } from '../read/read.page';

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
export class ReadMobilePage extends ReadPage { }
