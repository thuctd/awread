import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'account-complete',
  templateUrl: './account-complete.organ.html',
  styleUrls: ['./account-complete.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCompleteOrgan implements OnInit {
  @Output() submitEvent = new EventEmitter();
  formComplete = this.fb.group({
    email: ['', [Validators.email]],
    password: [''],
  });
  title = 'Hoàn tất thông tin';
  description = 'Cập nhật email của bạn để dễ dàng lấy lại tài khoản khi cần';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
