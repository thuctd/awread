import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.organ.html',
  styleUrls: ['./login.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginOrgan implements OnInit {
  formDangNhap = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  @Output() submitEvent = new EventEmitter();
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
