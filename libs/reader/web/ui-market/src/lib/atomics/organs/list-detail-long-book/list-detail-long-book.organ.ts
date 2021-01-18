import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-detail-long-book',
  templateUrl: './list-detail-long-book.organ.html',
  styleUrls: ['./list-detail-long-book.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailLongBookOrgan implements OnInit {
  counter = Array;

  @Input() moreContent = {
    text: 'Xem thêm',
    size: 'l',
    color: 'gray'
  }

  @Input() faIcon = faAngleDown;
  @Output() moreEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
