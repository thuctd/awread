import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forgot-sent',
  templateUrl: './forgot-sent.organ.html',
  styleUrls: ['./forgot-sent.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotSentOrgan implements OnInit {

  constructor() { }
  title = 'Check Your Inbox';
  description ='Chúng tôi đã gửi đường dẫn đặt lại mật khẩu của bạn, hãy chắc chắn bạn đã kiểm tra thư mục spam.';

  @Output() submitEvent = new EventEmitter();
  ngOnInit(): void {
  }

}
