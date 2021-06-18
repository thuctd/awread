import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';
@Component({
  selector: 'profile',
  templateUrl: './wrt-profile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtProfileTemplate implements OnInit {
  @Input() genres = [];
  @Input() ages = [];
  @Input() requireForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    avatar: [false]
  });
  @Input() optionalForm: FormGroup = this.fb.group({
    firstname: [''],
    middlename: [''],
    lastname: [''],
    bio: [''],
    websiteAddress: [''],
    facebookAddress: [''],
    dob: [''],
  });
  @Input() experienceForm: FormGroup = this.fb.group({
    gender: [''],
    ages: ['2'],
  });
  @Input() currentUser = {};
  @Output() submitEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // setTimeout(() => this.profileForm.patchValue({ username: 'ahihi' }), 5000);
  }
}
