import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileChangeCoverTemplate } from '../profile-change-cover/profile-change-cover.template';
@Component({
  selector: 'profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTemplate implements OnInit {
  @Input() profileForm: FormGroup;
  @Input() submitted: boolean;
  @Output() updateProfileEvent = new EventEmitter();
  constructor(
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // setTimeout(() => this.profileForm.patchValue({ username: 'ahihi' }), 5000);
  }
  openChangeCover($event) {
    this.matDialog.open(ProfileChangeCoverTemplate, {
      width: '55rem',
      height: '33rem'
    });
  }
}
