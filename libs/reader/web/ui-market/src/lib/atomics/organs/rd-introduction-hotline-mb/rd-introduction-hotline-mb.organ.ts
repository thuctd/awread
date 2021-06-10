import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-hotline-mb',
  templateUrl: './rd-introduction-hotline-mb.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .bg-pink {
        background-color: #f5e7e7;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionHotlineMbOrgan implements OnInit {
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
      content: 'Sơn La',
    },
    {
      title: 'Đối tượng:',
      content: 'Việt Nam',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
