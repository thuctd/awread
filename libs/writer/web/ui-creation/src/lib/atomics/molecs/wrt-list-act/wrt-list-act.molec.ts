import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faChartLine, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wrt-list-act',
  templateUrl: './wrt-list-act.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtListActMolec implements OnInit {
  @Output() addChapterEvent = new EventEmitter();
  @Output() removeBookEvent = new EventEmitter();
  @Output() editBookEvent = new EventEmitter();
  @Output() updateBookStatusEvent = new EventEmitter();
  @Input() bookId: string;
  @Input() btns = [
    {
      titleButton: 'Thống kê',
      faIcon: faChartLine,
      type: 'STATS',
    },
    {
      titleButton: 'Chia sẻ',
      faIcon: faShareAlt,
      type: 'SHARE',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  updateBookStatus(status: string) {
    this.updateBookStatusEvent.emit({ bookId: this.bookId, type: status });
  }

  bookActionEvent(type: string) {
    switch (type) {
      case 'new-chapter':
        this.addChapterEvent.emit(this.bookId);
        break;
      case 'edit':
        this.editBookEvent.emit(this.bookId);
        break;
      case 'delete':
        this.removeBookEvent.emit(this.bookId);
        break;
    }
  }
}
