import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-detail-book-chapter-mobile',
  templateUrl: './detail-book-chapter-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookChapterMobileOrgan implements OnInit {
  chapters = [
    {
      title: 'Mở đầu',
      value: '',
      price: 'Miễn phí',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020',
    },
    {
      title: 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
