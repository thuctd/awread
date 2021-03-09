import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .loading {
        height: calc(100vh - 20rem);
      }
      :host .no-data {
        height: calc(100vh - 20rem);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOrgan implements OnInit {
  @Input() books = [];
  @Input() loading: boolean;
  @Output() moreEvent = new EventEmitter();
  @Output() addChapterEvent = new EventEmitter();
  @Output() removeBookEvent = new EventEmitter();
  @Output() editBookEvent = new EventEmitter();
  @Output() updateBookStatusEvent = new EventEmitter();

  demoNumber = 10;

  counter = Array;

  constructor() {}

  ngOnInit(): void {}

  numberReturn(length) {
    return new Array(length);
  }
}
