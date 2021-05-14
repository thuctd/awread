import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NovelPage } from '../novel/novel.page';

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
export class NovelDesktopPage extends NovelPage { }
