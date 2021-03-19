import type { Book } from '@awread/writer/web/feature-auth';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-list-chapter',
  templateUrl: './wrt-list-chapter.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtListChapterMolec implements OnInit {
  @Input() book = {
    totalChapterCountPublished: 1,
    updatedat: '',
    totalChapterCount: 1,
  };
  @Input() countTotal = 1000;
  @Input() countPublished = 50;

  constructor() {}

  ngOnInit(): void {}
}
