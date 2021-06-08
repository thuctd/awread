import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'wrt-remember-forgot',
  templateUrl: './wrt-remember-forgot.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtRememberForgotMolec implements OnInit {
  @Input() link = '/forgot';
  @Input() btnClicked = new EventEmitter();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  closeAllDidalog() {
    this.matDialog.closeAll();
  }
}
