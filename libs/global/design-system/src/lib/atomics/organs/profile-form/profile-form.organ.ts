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
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormOrgan implements OnInit {
  @Input() connectGg = {
    title: 'Kết nối bằng google',
    image: '/global-assets/images/google.webp',
  };
  @Output() clickConnect = new EventEmitter();
  @Input() link = '/forgot';
  @Input() submitText = 'Lưu';
  @Input() profileForm: FormGroup = this.fb.group({});
  @Input() submitted: boolean;
  @Output() updateProfileEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
