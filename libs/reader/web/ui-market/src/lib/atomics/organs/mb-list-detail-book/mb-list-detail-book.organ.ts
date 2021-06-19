import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-mb-list-detail-book',
  templateUrl: './mb-list-detail-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MbDetailBookOrgan implements OnInit {
  @Input() books = [];
  @Input() loading;
  @Input() moreBook = 'Xem thêm...';
  @Input() btnTitle = 'Top phổ biến';
  @Input() hasNextPage;
  @Input() isMoreBooks: true | false = false;
  @Output() moreEvent = new EventEmitter();
  counter = Array;

  @Input() displayUI = {
    ui: {
      isAuthor: true,
      isRating: true,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  constructor() { }

  ngOnInit(): void { }
}
