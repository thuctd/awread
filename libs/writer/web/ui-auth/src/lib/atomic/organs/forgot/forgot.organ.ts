import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'forgot',
  templateUrl: './forgot.organ.html',
  styleUrls: ['./forgot.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotOrgan implements OnInit {
  formForgotPassword = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  title = 'Quên mật khẩu?';
  description='Vui lòng nhập địa chỉ email đã dùng của bạn khi tạo tài khoản, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.';
  @Output() submitEvent = new EventEmitter();
  constructor(
    private fb: FormBuilder,
  ) { }
ngOnInit(){}
}
