import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-author-content-popup-block',
  templateUrl: './rd-author-content-popup-block.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorContentPopupBlockOrgan implements OnInit {
  @Input() title = 'Chặn Cam Thuong';
  @Input() content = 'Tài khoản này hiện không thể theo dõi bạn, gửi bạn tin nhắn, đăng trên hồ sơ của bạn hay bình luận trên truyện của bạn';

  @Input() text1 = 'Hủy';
  @Input() class1 = 'bg-gray-300 text-gray-800 rounded-full py-2 px-8';

  @Input() text2 = 'Chặn';
  @Input() class2 = 'bg-gray-700 text-white rounded-full py-2 px-8';
  constructor() {}

  ngOnInit(): void {}
}
