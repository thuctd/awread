import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { RdAuthorPopupNotiReportTemplate } from '../../templates/rd-author-popup-noti-report/rd-author-popup-noti-report.template';
@Component({
  selector: 'template-rd-author-popup-report',
  templateUrl: './rd-author-popup-report.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupReportTemplate implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogNotiReport($event) {
    this.matDialog.open(RdAuthorPopupNotiReportTemplate, {
      width: '30rem',
      height: '20rem',
    });
  }
}
