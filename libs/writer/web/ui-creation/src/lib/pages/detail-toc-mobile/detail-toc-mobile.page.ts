import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DetailTocPage } from '../detail-toc/detail-toc.page';

@Component({
  selector: 'page-detail-toc-mobile',
  templateUrl: './detail-toc-mobile.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTocMobilePage extends DetailTocPage {}
