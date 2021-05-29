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
  @Input() loading: boolean;
  @Input() categories = [];
  @Input() tabs = [
    {
      name: 'Tất cả',
      isActive: true,
      isNovel: false,
    },
    {
      name: 'Truyện dài',
      isActive: false,
      isNovel: false,
    },
    {
      name: 'Truyện ngắn',
      isActive: false,
      isNovel: false,
    },
    {
      name: 'Tản văn',
      isActive: false,
      isNovel: true,
    },
  ];

  activePage:number = 0;  

  @Output() emitBooks = new EventEmitter();
  @Output() displayActivePage = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();

  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
