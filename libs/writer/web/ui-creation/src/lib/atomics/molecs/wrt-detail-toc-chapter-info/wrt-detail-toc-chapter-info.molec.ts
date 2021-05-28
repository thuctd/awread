import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-wrt-detail-toc-chapter-info',
  templateUrl: './wrt-detail-toc-chapter-info.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailTocChapterInfoMolec implements OnInit {
  @Input() chapter = {
    position: '',
    title: '',
    published: true,
    updatedAt: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
