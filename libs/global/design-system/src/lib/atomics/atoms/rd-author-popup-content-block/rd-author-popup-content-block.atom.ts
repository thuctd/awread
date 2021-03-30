import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-author-popup-content-block',
  templateUrl: './rd-author-popup-content-block.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupContentBlockAtom implements OnInit {
  @Input() title = 'Chặn ';
  @Input() name = 'Cam Thuong';
  @Input() content = 'Tài khoản này hiện không thể theo dõi bạn, gửi bạn tin nhắn, đăng trên hồ sơ của bạn hay bình luận trên truyện của bạn';

  constructor() {}

  ngOnInit(): void {}
}
