import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-infomation-app',
  templateUrl: './rd-introduction-infomation-app.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .image {
        background-image: url('https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-13-at-10.23.39-AM.png');
        height: 30rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionInfomationAppOrgan implements OnInit {
  @Input() contents = [
    {
      title: 'Trang chủ:',
      content: '',
      isLink: 'https://awread.com.vn',
    },
    {
      title: 'Facebook',
      content: '',
      isLink: 'https://awread.com.vn',
    },
    {
      title: 'Nhóm:',
      content: '',
      isLink: 'https://awread.com.vn',
    },
    {
      title: 'Liên kết IOS',
      content: '',
      isLink: 'https://awread.com.vn',
    },
    {
      title: 'Liên kết Android',
      content: '',
      isLink: 'https://awread.com.vn',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
