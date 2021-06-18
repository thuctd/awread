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
  Để trở thành tác giả và đăng truyện tại Awread, bạn vui lòng đọc kỹ và đồng ý với một số quy định nhỏ sau của chúng mình nhé.
  </br>
  </br>1. Tác giả cam kết rằng, toàn bộ các truyện được tác giả đăng tải tại mục tự sáng tác của Awread là tác phẩm thuộc quyền sở hữu của tác giả, do chính tác giả sáng tác và chịu trách nhiệm.
  </br>2. Các tác phẩm được đăng tải tại Awread phải đảm bảo tuân thủ các quy định của Awread, không vi phạm các điều cấm theo Điều khoản dịch vụ của Awread và quy định của pháp luật.
  </br>3. Tác phẩm sử dụng ngôn từ trong sáng, không mang tính chất đi ngược lại thuần phong mỹ tục của dân tộc Việt Nam. Hạn chế sử dụng teencode, tiếng lóng, từ địa phương khó hiểu mang tính chất gây nhầm lẫn.
  </br>4. Nội dung tác phẩm không bao gồm các nội dung chống phá nhà nước CHXHCN Việt Nam, không truyền bá mê tín dị đoan
  </br>5. Tác giả chịu mọi trách nhiệm đối với các nội dung thuộc tác phẩm tác giả đã đăng tải.
  </br>6. Tác giả cam kết thực hiện tuân thủ toàn bộ các nghĩa vụ khác theo các quy định tại Điều khoản sử dụng này, các quy định của Awread và quy định khác (nếu có) của pháp luật nước CHXHCN Việt Nam.
  </br>Tất cả các trường hợp vi phạm quy định tại Điều khoản này, Awread sẽ xóa toàn bộ bài đăng và cấm vĩnh viễn tài khoản của tác giả. Awread được miễn trừ trách nhiệm trong mọi trường hợp, tác giả phải chịu mọi trách nhiệm liên quan với bên thứ ba và cơ quan nhà nước có thẩm quyền.`;

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
