import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'info-form',
  templateUrl: './info-form.molec.html',
    styleUrls: ['./info-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoFormMolec implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });
  @Input() submitted: boolean;
  items = [
    {
      key: 'Email',
    },
    {
      key: 'Số điện thoại',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
