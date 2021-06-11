import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

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
  @Input() page = {
    name: 'TRUYỆN MỚI CẬP NHẬT',
    href: ['/latest-books'],
  };
  @Input() books = [];
  @Input() loading;
  @Input() categories = [];
  @Input() currentPage;
  @Input() eventResetPage;
  @Input() totalBook;
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

  @Output() emitBooks = new EventEmitter();
  @Output() pageChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
