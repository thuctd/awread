import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterWebTemplate } from '../../templates/register-web/register-web.template';

@Component({
  selector: 'molec-interrogatory',
  templateUrl: './interrogatory.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterrogatoryMolec implements OnInit {
  @Input() text = 'Nếu bạn chưa có tài khoản?';

  @Input() textLink = 'Tạo tài khoản mới';
  @Output() submitEvent = new EventEmitter();

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegisterWebTemplate>) {}

  ngOnInit(): void {}

  onClick(): void {
    this.dialogRef.close();
  }
}
