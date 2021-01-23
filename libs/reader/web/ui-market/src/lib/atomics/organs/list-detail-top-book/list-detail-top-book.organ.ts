import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'list-detail-top-book',
  templateUrl: './list-detail-top-book.organ.html',
  styleUrls: ['./list-detail-top-book.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailTopBookOrgan implements OnInit {
  @Input() moreBook = 'Xem thêm...';

  @Output() moreEvent = new EventEmitter();
  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
