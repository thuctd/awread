import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-noti-report-mb',
  templateUrl: './rd-author-popup-noti-report-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorPopupNotiReportMbTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
