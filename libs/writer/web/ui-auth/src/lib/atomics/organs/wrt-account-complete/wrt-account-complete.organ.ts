import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-account-complete',
  templateUrl: './wrt-account-complete.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtAccountCompleteOrgan implements OnInit {
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
