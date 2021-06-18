import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';

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
  @Input() genres = [];
  @Input() ages = [];
  @Input() link = '/forgot';
  @Input() submitText = 'Lưu';
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
    genreIds: [[]],
  });
  @Input() submitted: boolean;
  @Output() submitEvent = new EventEmitter();
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void { }
}
