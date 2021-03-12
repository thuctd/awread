import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-unblock-mb',
  templateUrl: './rd-author-popup-unblock-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupUnblockMbTemplate implements OnInit {
  @Input() title = 'Bỏ Chặn ';
  @Input() content = 'Tài khoản này hiện có thể theo dõi bạn, gửi bạn tin nhắn, đăng trên hồ sơ của bạn hay bình luận trên truyện của bạn';

  constructor() {}

  ngOnInit(): void {}
}
