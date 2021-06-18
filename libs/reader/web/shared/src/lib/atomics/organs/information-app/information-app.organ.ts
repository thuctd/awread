import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-information-app',
  templateUrl: './information-app.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationAppOrgan implements OnInit {
  @Input() info = [
    {
      title: 'Email',
      line1: {
        text: 'Awread Book',
        class: 'text-gray-700',
      },
      line2: 'info@awread.vn',
    },
    {
      title: 'Facebook',
      line1: {
        text: 'https://www.facebook.com/awread.vn',
        class: '',
      },
      line2: '',
    },
    {
      title: 'Địa chỉ',
      line1: {
        text: 'Đường Phan Đình Giót, Thị trấn Mộc Châu, Mộc Châu, Sơn La',
        class: '',
      },
      line2: 'Tel: 0349 335 484',
    },
  ];

  @Input() social = [
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/awread.vn',
    },
    {
      provider: 'zalo',
      href: 'http://zalo.me/1839376602979178212?src=qr',
    },
    {
      provider: 'instagram',
      href: 'https://www.instagram.com/awreadbook/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
