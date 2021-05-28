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
  @Output() ClickConnect = new EventEmitter();
  @Input() imgSrc;
  constructor(public matDialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    // setTimeout(() => this.profileForm.patchValue({ username: 'ahihi' }), 5000);
  }
  openChangeCover($event) {
    this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
    });
  }
}
