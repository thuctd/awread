import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'template-profile-change-cover',
  templateUrl: './wrt-profile-change-cover.template.html',
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      .mat-dialog-content {
        overflow: hidden !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtProfileChangeCoverTemplate implements OnInit {
  @Input() title = 'Chọn ảnh đại diện';
  controlName = new FormControl('');
  icon = faTimes;
  status = 'pending';
  percentLoading = '10%';
  constructor(public matDialogRef: MatDialogRef<WrtProfileChangeCoverTemplate>) {}

  ngOnInit(): void {}

  eventChooseImage($event) {
    this.status = 'loading';
    console.log(this.controlName.value);
    setTimeout(() => {
      this.status = 'reposition';
      console.log(this.status);
    }, 3000);
  }
  submitEvent(event) {
    console.log(event);
    if (event == 'close') {
      this.matDialogRef.close();
    } else {
      //save image
    }
  }
}
