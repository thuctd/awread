import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-detail-short-book',
  templateUrl: './list-detail-short-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailShortBookOrgan implements OnInit {
  counter = Array;
  @Input() display: 'grid' | 'list' = 'grid';
  @Input() moreContent = 'Xem thêm';

  @Input() faIcon = faAngleDown;
  @Output() moreEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
