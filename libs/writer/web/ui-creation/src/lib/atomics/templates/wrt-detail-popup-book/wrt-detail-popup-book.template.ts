import { Component, OnInit, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogDataInfoBookList {
  title: string;
  description: string;
  srcImg: any;
}
@Component({
  selector: 'wrt-template-detail-popup-book',
  templateUrl: './wrt-detail-popup-book.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailPopupBookTemplate implements OnInit {
  constructor(
    @Optional() public dialogRef: MatDialogRef<WrtDetailPopupBookTemplate>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataInfoBookList
  ) {}

  ngOnInit(): void {}
}
