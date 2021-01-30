import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { TabHead } from '../../../interface/tabs';

@Component({
  selector: 'template-login-register',
  templateUrl: './login-register.template.html',
  styleUrls: ['./login-register.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginRegisterTemplate implements OnInit {
  @Input() authForm: FormGroup = this.fb.group({
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  // @Input() tabs: TabHead[];
  @Input() tabs = [
    { name: 'Đăng nhập', path: 'login' },
    { name: 'Đăng ký', path: 'register' },
  ];
  @Input() selectedTab = 'login';
  @Output() regiterEvent = new EventEmitter();
  @Output() auth = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('mode: ', this.selectedTab);
  }

  toggleTab(event) {
    this.authForm.reset();
    if (this.selectedTab === 'login') {
      this.selectedTab = 'register';
    } else {
      this.selectedTab = 'login';
    }
  }
}
