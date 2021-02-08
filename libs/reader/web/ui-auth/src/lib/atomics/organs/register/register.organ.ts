import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'organ-register',
  templateUrl: './register.organ.html',
  styleUrls: ['./register.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterOrgan implements OnInit {
  @Input() text = 'Nếu bạn đã có tài khoản?';
  @Input() textLink = 'Đăng nhập';
  @Input() authForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
