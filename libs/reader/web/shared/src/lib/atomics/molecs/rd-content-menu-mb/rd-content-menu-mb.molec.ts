import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-rd-content-menu-mb',
  templateUrl: './rd-content-menu-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdContentMenuMbMolec implements OnInit {
  @Input() isLogin = true;
  @Output() clicked = new EventEmitter();

  @Input() home = {
    text: 'Trang chủ',
    href: '',
  };

  @Input() book = {
    title: 'Truyện',
    dropdown: [
      {
        title: 'Truyện tự sáng tác',
        href: ['/composed', { categoryId: '' }],
      },
      {
        title: 'Truyện sưu tầm',
        href: ['/collected', { categoryId: '' }],
      },
    ],
  };

  @Input() createBook = {
    text: 'Đăng truyện',
    href: '/',
  };

  @Input() coin = {
    text: 'Nạp Coin',
    href: '/',
  };

  @Input() public = {
    title: 'Cộng đồng',
    dropdown: [
      {
        title: 'Về chúng tôi',
        href: '/',
      },
      {
        title: 'Tham gia cùng chúng tôi',
        href: '/',
      },
      {
        title: 'Tin tức',
        href: '/',
      },
    ],
  };

  @Input() setting = {
    text: 'Cài đặt',
    href: '/',
  };

  constructor() { }

  ngOnInit(): void { }
}
