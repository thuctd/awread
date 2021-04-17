import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-detail-book-mobile',
  templateUrl: './detail-book-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookMobileTemplate implements OnInit {
  @Input() book = {
    title: 'Ngày ấy vì ai mà đổi thay',
    auth: 'Cẩm Thương',
    type: 'Hoang tưởng, kinh dị',
    status: 'Đang tiến hành',
    publishedAt: '2020',
    country: '(chủ yếu dành cho truyện sưu tầm)'
  };
  @Input() chapters = [
    {
      id: "1",
      bookId: "1",
      chapterNumber: 'Chương 1',
      title: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    }
  ];
  @Input() topBooks = [];
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
