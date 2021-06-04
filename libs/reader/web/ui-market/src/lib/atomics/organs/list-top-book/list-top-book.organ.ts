import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-list-top-book',
  templateUrl: './list-top-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTopBookOrgan implements OnInit {
  @Input() books = [];
  @Input() display: 'grid' | 'list' = 'grid';
  @Input() moreContent = 'Xem thêm';
  @Output() moreEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
