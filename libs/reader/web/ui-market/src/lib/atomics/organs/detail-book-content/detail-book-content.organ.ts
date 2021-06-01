import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-detail-book-content',
  templateUrl: './detail-book-content.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookContentOrgan implements OnInit {
  @Input() book = {
    bookId: '1',
    chapterId: '1',
    cover: '1',
    title: 'Ngày ấy vì ai mà đổi thay',
    authors: [],
    genres: [],
    completed: true,
    publishedAt: '2020',
    country: '(chủ yếu dành cho truyện sưu tầm)'
  };
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
