import { CurrentUserFacade } from '@awread/core/users';
import { PersistNgFormPlugin } from '@datorama/akita';
import { SnackbarService } from '@awread/global/packages';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-wrt-rule-popup',
  templateUrl: './wrt-rule-popup.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtRulePopupTemplate implements OnInit {
  persistForm: PersistNgFormPlugin;
  form: FormGroup;
  rules = `Bằng cách sử dụng các dịch vụ được cung cấp bởi Awread, bạn đồng ý với
  </br>(1) Các điều khoản và điều kiện của Điều khoản Dịch vụ và
  </br>(2) Chính sách bảo mật của chúng tôi.Chúng tôi có thể sửa đổi và cập nhật các Điều khoản Dịch vụ này bất cứ lúc nào. Sửa đổi và cập nhật sẽ có hiệu lực sau 3 ngày kể từ khi chúng được đăng. Không có điều khoản nào trong các Điều khoản Dịch vụ này được coi là trao quyền cho bên thứ ba nào.`;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<WrtRulePopupTemplate>,
    private currentUserFacade: CurrentUserFacade) { }

  ngOnInit(): void {
    this.initForm();
  }

  eventSubmit(): void {
    const terms = this.form.get('terms').value;
    this.dialogRef.close(terms);
  }

  private initForm() {
    this.form = this.fb.group({
      terms: ['', [Validators.required]],
    });

    this.persistForm = new PersistNgFormPlugin(
      this.currentUserFacade.currentUserQuery,
      'terms')
      .setForm(this.form);
  }
}
