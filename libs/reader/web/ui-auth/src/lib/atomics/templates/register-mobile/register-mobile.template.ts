import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'template-register-mobile',
  templateUrl: './register-mobile.template.html',
  styleUrls: ['./register-mobile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterMobileTemplate implements OnInit {
  @Input() authForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
