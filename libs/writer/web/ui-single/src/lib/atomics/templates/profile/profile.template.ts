import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTemplate implements OnInit {
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // setTimeout(() => this.profileForm.patchValue({ username: 'ahihi' }), 5000);
  }
}
