import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'account-complete',
  templateUrl: './account-complete.organ.html',
  styleUrls: ['./account-complete.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCompleteOrgan implements OnInit {
  @Output() completeEvent = new EventEmitter();
  @Input() formComplete: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  title = 'Hoàn tất thông tin';
  description = 'Cập nhật email của bạn để dễ dàng lấy lại tài khoản khi cần';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
