import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-detail-long-book',
  templateUrl: './list-detail-long-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailLongBookOrgan implements OnInit {
  counter = Array;
  @Input() categoryId = '1';
  @Input() longbooks = [];
  @Input() chapters = [];
  @Input() display: 'grid' | 'list' = 'grid';
  @Input() moreContent = 'Xem thêm';

  @Input() faIcon = faAngleDown;
  @Output() moreEvent = new EventEmitter();

  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: false,
      isIcon: false,
      isDate: true,
    },
    size: {
      sizeTitle: 'm',
      sizeBtn: true,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
