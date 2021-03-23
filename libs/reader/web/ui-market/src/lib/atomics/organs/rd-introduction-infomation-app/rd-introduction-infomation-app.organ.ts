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
      content: 'https://awread.com.vn',
    },
    {
      title: 'Facebook',
      content: 'https://awread.com.vn',
    },
    {
      title: 'Nhóm:',
      content: 'https://awread.com.vn',
    },
    {
      title: 'Liên kết IOS',
      content: 'https://awread.com.vn',
    },
    {
      title: 'Liên kết Android',
      content: 'https://awread.com.vn ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
