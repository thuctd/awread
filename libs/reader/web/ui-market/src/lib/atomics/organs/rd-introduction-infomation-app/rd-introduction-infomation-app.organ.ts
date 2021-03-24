import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-infomation-app',
  templateUrl: './rd-introduction-infomation-app.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .bg-pink {
        background-color: #f8e8e8;
      }
      :host .h-160 {
        height: 40rem;
      }
      @media only screen and (max-width: 1024px) {
        :host .h-160 {
          height: 34rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionInfomationAppOrgan implements OnInit {
  @Input() srcImg = '/global-assets/images/Group-846.webp';
  @Input() contents = [
    {
      title: 'Tên công ty:',
      content: 'Awread Web',
    },
    {
      title: 'Danh mục kinh doanh:',
      content: 'Giải trí',
    },
    {
      title: 'Vị trí công ty:',
      content: 'Hà nội',
    },
    {
      title: 'Đối tượng:',
      content: 'Việt Nam',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
