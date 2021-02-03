import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.organ.html',
  styleUrls: ['./list.organ.scss'],
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
