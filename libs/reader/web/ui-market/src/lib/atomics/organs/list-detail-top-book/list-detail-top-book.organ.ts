import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'list-detail-top-book',
  templateUrl: './list-detail-top-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host #my-container > p:last-child {
        border: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailTopBookOrgan implements OnInit {
  @Input() moreBook = 'Xem thêm...';
  @Input() btnTitle = 'Top phổ biến';
  @Input() chapters = [];
  @Input() books = [
    {
      bookId: '',
      imgUrl: '',
      title: '',
    },
  ];

  @Output() moreEvent = new EventEmitter();
  counter = Array;

  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: false,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
