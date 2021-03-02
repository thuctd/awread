import { Component, OnInit, ChangeDetectionStrategy, Optional } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'template-check-mail-mobile',
  templateUrl: './check-mail-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckMailMobileTemplate implements OnInit {
  constructor(@Optional() public dialogRef: MatDialogRef<CheckMailMobileTemplate>) {}

  ngOnInit(): void {}
}
