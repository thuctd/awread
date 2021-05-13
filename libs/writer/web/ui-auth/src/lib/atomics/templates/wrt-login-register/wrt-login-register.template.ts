import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { TabHead } from '../../../interface/tabs';

@Component({
  selector: 'wrt-template-login-register',
  templateUrl: './wrt-login-register.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtLoginRegisterTemplate implements OnInit {
  @Input() loginForm: FormGroup = this.fb.group({
    loginname: ['', Validators.required],
    password: ['', Validators.required],
  });
  @Input() registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', []],
    phone: ['', []],
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('mode: ', this.selectedTab);
  }

  toggleTab(event) {
    this.loginForm.reset();
    this.registerForm.reset();
    if (this.selectedTab === 'login') {
      this.selectedTab = 'register';
    } else {
      this.selectedTab = 'login';
    }
  }
}
