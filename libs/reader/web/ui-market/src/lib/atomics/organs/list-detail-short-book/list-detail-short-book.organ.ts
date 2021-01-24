import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-detail-short-book',
  templateUrl: './list-detail-short-book.organ.html',
  styleUrls: ['./list-detail-short-book.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailShortBookOrgan implements OnInit {
  counter = Array

  @Input() moreContent = 'Xem thêm';

  @Input() faIcon = faAngleDown;
  @Output() moreEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
