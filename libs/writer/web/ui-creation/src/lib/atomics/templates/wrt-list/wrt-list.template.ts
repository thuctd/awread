import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'template-list',
  templateUrl: './wrt-list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtListTemplate implements OnInit {
  @Input() books = [];
  @Input() loading: boolean;
  @Output() addChapterEvent = new EventEmitter();
  @Output() removeBookEvent = new EventEmitter();
  @Output() updateBookStatusEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
