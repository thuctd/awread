import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-news-awread-item',
  templateUrl: './rd-news-awread-item.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadItemAtom implements OnInit {
  @Input() newsId = 'bvxz_324988seQ6x';
  @Input() newsGrid = {
    title: 'Thông báo lịch phát hành truyện mới',
    src: '/global-assets/images/Rectangle-487.webp',
  };
  @Input() newsList = {
    title: 'Hình như SHIB đang giảm',
    src: '/global-assets/images/Rectangle-487.webp',
    excerpt: 'Từ ngày em đến ....',
  };
  @Input() mode: 'grid' | 'list' = 'grid';

  constructor() {}

  ngOnInit(): void {}
}
