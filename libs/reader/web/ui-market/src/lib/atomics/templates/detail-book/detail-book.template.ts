import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-detail-book',
  templateUrl: './detail-book.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookTemplate implements OnInit {
  @Input() items = [];
  @Input() newestChapters = [];
  @Input() chapters = [];
  @Input() book = {
    title: 'Ngày ấy vì ai mà đổi thay',
    auth: 'Cẩm Thương',
    type: 'Hoang tưởng, kinh dị',
    status: 'Đang tiến hành',
    publishedAt: '2020',
    country: '(chủ yếu dành cho truyện sưu tầm)'
  };
  @Input() topBooks = [];
  @Input() authorBooks = [];
  menu = [
    {
      title: 'Home',
      link: '/home',
      size: 'text-md',
      icon: faHome,
    },
    {
      title: 'Tác giả',
      link: '',
      icon: faAngleRight,
      size: 'text-xs',
    },
    {
      title: 'Cẩm Thương',
      link: '',
      size: 'text-xs',
      icon: faAngleRight,
    },
  ];
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();
  @Output() nativeAuthorBook = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
