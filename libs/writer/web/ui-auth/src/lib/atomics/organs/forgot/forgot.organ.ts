import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'forgot',
  templateUrl: './forgot.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotOrgan implements OnInit {
  @Input() emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  title = 'Quên mật khẩu?';
  description = 'Vui lòng nhập địa chỉ email đã dùng của bạn khi tạo tài khoản, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.';
  @Output() submitEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
}
