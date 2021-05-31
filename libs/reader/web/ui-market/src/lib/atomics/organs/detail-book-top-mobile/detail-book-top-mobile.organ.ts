import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'organ-detail-book-top-mobile',
  templateUrl: './detail-book-top-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .border-12 {
        border-width: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookTopMobileOrgan implements OnInit {
  @Input() book = {
    bookId: '1',
    chapterId: '1',
    cover: '1',
    title: 'Ngày ấy vì ai mà đổi thay',
    authors: [''],
    genres: [''],
    completed: true,
    publishedAt: '2020',
    country: '(chủ yếu dành cho truyện sưu tầm)'
  };
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
