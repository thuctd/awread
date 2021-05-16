import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-profile-form',
  templateUrl: './profile-form.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      .bg-blue {
        background-color: #3b5998;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormOrgan implements OnInit {
  @Input() link = '/forgot';
  @Input() submitText = 'Lưu';
  @Input() profileForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    website: ['', [Validators.required]],
    introduce: ['', [Validators.required]],
  });
  @Input() submitted: boolean;
  @Output() updateProfileEvent = new EventEmitter();
  @Output() ClickConnectFB = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
