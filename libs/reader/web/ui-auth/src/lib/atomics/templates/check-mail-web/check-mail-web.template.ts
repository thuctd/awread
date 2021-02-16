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
  @Input() srcImg = 'https://hochu.ua/images/05600a6dc19a37ef746fb267902398bf.jpg';

  constructor(@Optional() public dialogRef: MatDialogRef<CheckMailWebTemplate>) {}

  ngOnInit(): void {}
}
