import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'molec-profile-info-form',
  templateUrl: './profile-info-form.molec.html',
  styleUrls: ['./profile-info-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInfoFormMolec implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    middlename: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    age: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });
  @Input() submitted: boolean;
  @Input() inputControl = new FormControl('');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
