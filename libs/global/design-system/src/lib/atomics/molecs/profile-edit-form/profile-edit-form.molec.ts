import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-profile-edit-form',
  templateUrl: './profile-edit-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditFormMolec implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    website: ['', [Validators.required]],
    Facebook: ['', [Validators.required]],
    bio: ['', ''],
  });
  @Input() submitted: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
