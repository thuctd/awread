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
    publishedCount: '1',
    draftCount: '1',
    updatedAt: Date.now()
  };

  constructor() { }

  ngOnInit(): void { }
}
