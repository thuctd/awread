import { Component, OnInit, ChangeDetectionStrategy, Input, Optional } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'template-check-mail-web',
  templateUrl: './check-mail-web.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckMailWebTemplate implements OnInit {
  constructor(@Optional() public dialogRef: MatDialogRef<CheckMailWebTemplate>) {}

  ngOnInit(): void {}
}
