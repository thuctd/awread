import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-chapter-book',
  templateUrl: './list-chapter-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListChapterBookAtom implements OnInit {
  @Input() book = {
    publishedCount: 0,
    draftCount: 0
  }

  constructor() { }

  ngOnInit(): void { }
}
