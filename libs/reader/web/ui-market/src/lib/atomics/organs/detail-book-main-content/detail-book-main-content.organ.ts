import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-detail-book-main-content',
  templateUrl: './detail-book-main-content.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookMainContentOrgan implements OnInit {
  @Input() book = {
    title: 'Ngày ấy vì ai mà đổi thay',
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
