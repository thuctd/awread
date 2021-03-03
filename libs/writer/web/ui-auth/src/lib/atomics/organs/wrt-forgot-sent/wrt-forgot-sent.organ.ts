import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'wrt-forgot-sent',
  templateUrl: './wrt-forgot-sent.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtForgotSentOrgan implements OnInit {
  title = 'Kiểm tra Email của bạn';
  description: string;
  @Input() email: string;
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.description = `Chúng tôi đã gửi đường dẫn đặt lại mật khẩu của bạn tới địa chỉ${this.email}, hãy chắc chắn bạn đã kiểm tra thư mục spam.`;
  }
}
