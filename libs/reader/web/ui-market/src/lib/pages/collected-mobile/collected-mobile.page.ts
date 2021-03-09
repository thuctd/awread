import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CollectedPage } from '@awread/reader/web/feature-market';

@Component({
  selector: 'ui-collected-mobile',
  templateUrl: './collected-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectedMobilePage extends CollectedPage {
    @Input() links = [
    {
      name: 'Truyện dài',
      href: 'long-story',
    },
    {
      name: 'Truyện ngắn',
      href: 'short-story'
    },
    {
      name: 'Tiểu thuyết',
      href: 'novel'
    },
  ];
}
