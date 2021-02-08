import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NovelPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-novel-desktop',
  templateUrl: './novel-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovelDesktopPage extends NovelPage {}
