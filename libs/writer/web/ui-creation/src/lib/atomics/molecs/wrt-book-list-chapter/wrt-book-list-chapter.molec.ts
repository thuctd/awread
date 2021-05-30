import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-wrt-book-list-chapter',
  templateUrl: './wrt-book-list-chapter.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookListChapterMolec implements OnInit {
  @Input() book = {
    publishedCount: '1',
    draftCount: '1',
    updatedAt: Date.now(),
  };

  constructor() {}

  ngOnInit(): void {}
}
