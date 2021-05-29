import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailTocPage } from '../detail-toc/detail-toc.page';

@Component({
  selector: 'page-detail-toc-desktop',
  templateUrl: './detail-toc-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTocDesktopPage extends DetailTocPage {}
