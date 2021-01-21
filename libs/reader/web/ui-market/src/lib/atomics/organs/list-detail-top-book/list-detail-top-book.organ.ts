import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'list-detail-top-book',
  templateUrl: './list-detail-top-book.organ.html',
  styleUrls: ['./list-detail-top-book.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailTopBookOrgan implements OnInit {
  @Input() btn = {
    submitText: 'Top phổ biến ',
    isActive: true,
  };

  @Input() moreBook = {
    text: 'Xem thêm...',
    size: 'm',
    color: 'green'
  }

  @Output() moreEvent = new EventEmitter();
  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
