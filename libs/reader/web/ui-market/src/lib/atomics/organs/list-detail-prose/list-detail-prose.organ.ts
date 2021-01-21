import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-detail-prose',
  templateUrl: './list-detail-prose.organ.html',
  styleUrls: ['./list-detail-prose.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailProseOrgan implements OnInit {
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
