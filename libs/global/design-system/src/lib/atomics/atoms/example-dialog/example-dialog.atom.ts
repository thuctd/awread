import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-example-dialog',
  templateUrl: './example-dialog.atom.html',
  styleUrls: ['./example-dialog.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDialogAtom implements OnInit {
  @Input() faIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
