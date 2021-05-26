import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WrtDetailPopupBookTemplate } from '@awread/writer/web/ui-creation';

@Component({
  selector: 'list',
  templateUrl: './wrt-list.organ.html',
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
export class WrtListOrgan implements OnInit {
  @Input() books = [];
  @Input() loading: boolean;
  @Output() moreEvent = new EventEmitter();
  @Output() addChapterEvent = new EventEmitter();
  @Output() removeBookEvent = new EventEmitter();
  @Output() updateBookStatusEvent = new EventEmitter();

  demoNumber = 10;

  counter = Array;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }

  numberReturn(length) {
    return new Array(length);
  }

  openDetailBook(): void {
    this.matDialog.open(WrtDetailPopupBookTemplate, {
      width: '55rem',
      height: '33rem',
    });
  }
}
