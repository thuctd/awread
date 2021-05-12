import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-news-awread',
  templateUrl: './rd-news-awread.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadOrgan implements OnInit {
  @Input() title = 'tin mới Awread';
  @Input() newsGrids = [
    {
      title: 'Tìm kiếm tài năng mới',
      src: '/global-assets/images/Rectangle-487.webp',
    },
    {
      title: 'Thông báo lịch phát hành truyện mới',
      src: '/global-assets/images/Rectangle-487.webp',
    },
    {
      title: 'Thông báo lịch phát hành truyện mới',
      src: '/global-assets/images/Rectangle-487.webp',
    },
  ];
  item = {
    title: 'Thông báo lịch phát hành truyện mới',
    src: '/global-assets/images/Rectangle-487.webp',
  };

  constructor() {}

  ngOnInit(): void {}
}
