import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-news-book',
  templateUrl: './rd-news-book.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsBookOrgan implements OnInit {
  @Input() title = 'Điểm tin sách';
  @Input() items = [
    {
      date: 'May 05 2021',
      status: {
        text: 'new',
        bgColor: 'blue-400',
      },
      description: {
        title: 'Tạm dừng',
        content: 'Hình như tau thích mi',
      },
    },
    {
      date: 'May 05 2021',
      status: {
        text: 'hot',
        bgColor: 'red-400',
      },
      description: {
        title: 'Thông báo',
        content: 'Hình như tau thích mi',
      },
    },
    {
      date: 'May 05 2021',
      status: {
        text: 'hot',
        bgColor: 'red-400',
      },
      description: {
        title: 'Bảo trì',
        content: 'Awread',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
