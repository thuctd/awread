import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-noti-report',
  templateUrl: './rd-author-popup-noti-report.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorPopupNotiReportTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
