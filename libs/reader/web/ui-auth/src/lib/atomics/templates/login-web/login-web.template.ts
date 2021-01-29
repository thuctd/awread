import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'template-login-web',
  templateUrl: './login-web.template.html',
  styleUrls: ['./login-web.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginWebTemplate implements OnInit {
  @Input() link = '/global-assets/images/newlogo.png';
  @Input() authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
