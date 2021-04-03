import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { RdAuthorPopupBlockMbTemplate } from '../rd-author-popup-block-mb/rd-author-popup-block-mb.template';
import { RdAuthorPopupReportMbTemplate } from '../rd-author-popup-report-mb/rd-author-popup-report-mb.template';

@Component({
  selector: 'template-rd-author-popup-menu-mb',
  templateUrl: './rd-author-popup-menu-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupMenuMbTemplate implements OnInit {
  @Output() clickBtn = new EventEmitter();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogBlockMb($event) {
    this.matDialog.open(RdAuthorPopupBlockMbTemplate, {
      width: '16.5rem',
      height: '20rem',
    });
  }

  openDiaLogReportMb($event) {
    this.matDialog.open(RdAuthorPopupReportMbTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
