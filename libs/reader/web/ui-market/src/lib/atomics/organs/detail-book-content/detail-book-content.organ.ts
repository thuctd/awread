import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-detail-book-content',
  templateUrl: './detail-book-content.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookContentOrgan implements OnInit {
  @Input() book = {
    title: 'Ngày ấy vì ai mà đổi thay',
    authorId: '1',
    auth: 'Cẩm Thương',
    type: 'Hoang tưởng, kinh dị',
    status: 'Đang tiến hành',
    publishedAt: '2020',
    country: '(chủ yếu dành cho truyện sưu tầm)'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
