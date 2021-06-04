import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-detail-book-update',
  templateUrl: './home-detail-book-update.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailBookUpdateOrgan implements OnInit {
  @Input() isInfoNovel: true | false = false;
  @Input() titlePage = 'Truyện mới cập nhật';
  @Input() books = [];
  @Input() loading;
  @Input() categories = [];
  @Input() tabs = [
    {
      name: 'Tất cả',
      isActive: true,
    },
    {
      name: 'Truyện dài',
      isActive: false,
    },
    {
      name: 'Truyện ngắn',
      isActive: false,
    },
    {
      name: 'Tản văn',
      isActive: false,
    },
  ];

  activePage = 0;

  @Output() emitBooks = new EventEmitter();
  @Output() displayActivePage = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();

  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
