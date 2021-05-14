import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NovelPage } from '../novel/novel.page';

@Component({
  selector: 'ui-novel-mobile',
  templateUrl: './novel-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovelMobilePage extends NovelPage { }
