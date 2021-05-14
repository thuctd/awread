import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReadPage } from '../read/read.page';

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
export default class ReadDesktopPage extends ReadPage { }
