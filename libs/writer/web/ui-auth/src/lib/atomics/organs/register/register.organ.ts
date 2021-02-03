import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.organ.html',
  styleUrls: ['./register.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterOrgan implements OnInit {
  @Output() regiterEvent = new EventEmitter();
  @Input() authForm: FormGroup = this.fb.group({
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
