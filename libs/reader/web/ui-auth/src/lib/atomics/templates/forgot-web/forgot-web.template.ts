import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'template-forgot-web',
  templateUrl: './forgot-web.template.html',
  styleUrls: ['./forgot-web.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotWebTemplate implements OnInit {
  @Input() emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @Input() title = {
    title: 'Quên mật khẩu?',
    class: 'text-gray-600 text-3xl',
  };
  @Input() description = {
    title:
      'Vui lòng nhập địa chỉ email đã dùng của bạn khi tạo tài khoản, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.',
    class: 'text-gray-400 text-lg',
  };
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
