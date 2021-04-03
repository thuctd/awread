import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { RdAuthorPopupNotiReportMbTemplate } from '../rd-author-popup-noti-report-mb/rd-author-popup-noti-report-mb.template';

@Component({
  selector: 'template-rd-author-popup-report-mb',
  templateUrl: './rd-author-popup-report-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupReportMbTemplate implements OnInit {
  @Input() faIcon = faChevronLeft;
  @Output() btnClick = new EventEmitter();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogNotiReportMb($event) {
    this.matDialog.open(RdAuthorPopupNotiReportMbTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
