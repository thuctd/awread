import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-check-mail',
  templateUrl: './check-mail.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckMailMolec implements OnInit {
  @Output() BtnClicked = new EventEmitter();
  @Input() link = '/global-assets/images/mailbox.webp';
  @Input() faIcon = faArrowLeft;
  @Input() backhome = '/home';
  @Input() text = 'Quay trở về Awread';

  constructor(@Optional() public dialogRef: MatDialogRef<CheckMailMolec>) {}

  ngOnInit(): void {}

  onClick(): void {
    this.dialogRef.close();
  }
}
