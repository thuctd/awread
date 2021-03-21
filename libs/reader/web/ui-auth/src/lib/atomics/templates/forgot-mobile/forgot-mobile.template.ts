import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckMailMobileTemplate } from '../check-mail-mobile/check-mail-mobile.template';

@Component({
  selector: 'template-forgot-mobile',
  templateUrl: './forgot-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotMobileTemplate implements OnInit {
  @Input() emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Input() title = 'Quên mật khẩu?';

  @Input() description = 'Vui lòng nhập địa chỉ email đã dùng của bạn khi tạo tài khoản, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.';
  @Output() submitEvent = new EventEmitter();

  constructor(public dialog: MatDialog, @Optional() public dialogRef: MatDialogRef<ForgotMobileTemplate>) {}

  ngOnInit(): void {}

  onClick(): void {
    this.dialogRef.close();
  }

  openFormCheckMailMobile($event): void {
    const dialogRef = this.dialog.open(CheckMailMobileTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
