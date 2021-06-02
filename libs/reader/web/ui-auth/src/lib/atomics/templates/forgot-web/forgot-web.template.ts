import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckMailWebTemplate } from '../check-mail-web/check-mail-web.template';

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

  constructor(public dialog: MatDialog, @Optional() public dialogRef: MatDialogRef<ForgotWebTemplate>) { }

  ngOnInit(): void { }

  onClick(): void {
    this.dialogRef.close();
  }

  openFormCheckMail($event): void {
    this.submitEvent.emit(this.emailFormControl.value);
    const dialogRef = this.dialog.open(CheckMailWebTemplate, {
      width: '32rem',
      height: '25rem',
    });
  }
}
