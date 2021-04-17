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
  @Input() books = [{
    id: '',
    imgUrl: '',
    title: '',
  }];
  @Output() moreEvent = new EventEmitter();
  counter = Array;

  constructor() { }

  ngOnInit(): void { }
}
