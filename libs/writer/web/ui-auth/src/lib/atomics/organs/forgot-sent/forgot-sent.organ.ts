import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'forgot-sent',
  templateUrl: './forgot-sent.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotSentOrgan implements OnInit {
  title = 'Check Your Inbox';
  description: string;
  @Input() email: string;
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.description = `Chúng tôi đã gửi đường dẫn đặt lại mật khẩu của bạn tới địa chỉ ${this.email}, hãy chắc chắn bạn đã kiểm tra thư mục spam.`;
  }
}
