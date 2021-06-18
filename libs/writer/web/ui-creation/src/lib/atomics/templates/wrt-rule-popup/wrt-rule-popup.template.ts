import { CurrentUserFacade } from '@awread/core/users';
import { PersistNgFormPlugin } from '@datorama/akita';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
  rules = `
  <strong> Quy định nhỏ, trách nhiệm lớn! </strong>
  </br>
  </br>1. Tác giả cam kết: toàn bộ truyện được đăng tải tại mục tự sáng tác là tác phẩm thuộc quyền sở hữu của tác giả, do chính tác giả sáng tác và chịu toàn bộ trách nhiệm.
  </br>2. Nội dung tác phẩm không bao gồm các nội dung chống phá nhà nước CHXHCN Việt Nam, không truyền bá mê tín dị đoan.
  </br>3. Awread có quyền cung cấp thông tin của tác giả cho cơ quan nhà nước có thẩm quyền nếu có dấu hiệu vi phạm.
  </br>
  </br> Tác giả vi phạm các quy định trên và các quy định khác của Awread sẽ bị xoá toàn bộ bài đăng và cấm vĩnh viễn tài khoản.
  </br>Awread được miễn trừ trách nhiệm trong mọi trường hợp, tác giả phải chịu mọi trách nhiệm liên quan với bên thứ ba và cơ quan nhà nước có thẩm quyền.`;

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
