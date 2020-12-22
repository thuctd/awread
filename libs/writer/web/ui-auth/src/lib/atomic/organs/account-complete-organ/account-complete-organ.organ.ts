import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'account-complete-organ',
  templateUrl: './account-complete-organ.organ.html',
  styleUrls: ['./account-complete-organ.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCompleteOrganOrgan implements OnInit {
  @Output() submitEvent = new EventEmitter();
  formComplete = this.fb.group({
    email: ['', [ Validators.email]],
    password: ['']
  });
  title="Hoàn tất thông tin";
  description="Cập nhật email của bạn để dễ dàng lấy lại tài khoản khi cần";
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
