import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-mb-detail-book',
  templateUrl: './mb-detail-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MbDetailBookOrgan implements OnInit {
  @Input() moreBook = 'Xem thêm...';
  @Input() btnTitle = 'Top phổ biến';
  @Output() moreEvent = new EventEmitter();
  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
