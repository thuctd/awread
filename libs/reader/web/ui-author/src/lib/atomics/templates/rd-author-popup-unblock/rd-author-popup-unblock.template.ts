import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-unblock',
  templateUrl: './rd-author-popup-unblock.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupUnblockTemplate implements OnInit {
  @Input() content = {
    title: 'Bỏ Chặn ',
    content: 'Tài khoản này hiện có thể theo dõi bạn, gửi bạn tin nhắn, đăng trên hồ sơ của bạn hay bình luận trên truyện của bạn',
    btn: {
      text: 'Bỏ chặn',
      class: 'bg-gray-700 text-white rounded-full py-2 px-5',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
