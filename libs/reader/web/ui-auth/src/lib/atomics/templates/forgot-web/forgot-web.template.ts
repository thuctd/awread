import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'template-forgot-web',
  templateUrl: './forgot-web.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotWebTemplate implements OnInit {
  @Input() emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Input() title = 'Quên mật khẩu?';
  @Input() description = 'Vui lòng nhập địa chỉ email đã dùng của bạn khi tạo tài khoản, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.';

  @Output() submitEvent = new EventEmitter();

  constructor(@Optional() public dialogRef: MatDialogRef<ForgotWebTemplate>) {}

  ngOnInit(): void {}
}
