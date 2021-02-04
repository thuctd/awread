import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'template-forgot-mobile',
  templateUrl: './forgot-mobile.template.html',
  styleUrls: ['./forgot-mobile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotMobileTemplate implements OnInit {
  @Input() emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Input() title = 'Quên mật khẩu?';

  @Input() description = 'Vui lòng nhập địa chỉ email đã dùng của bạn khi tạo tài khoản, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.';
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
