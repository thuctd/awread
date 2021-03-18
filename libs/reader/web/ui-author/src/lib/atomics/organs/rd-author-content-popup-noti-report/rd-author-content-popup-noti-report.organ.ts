import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-rd-author-content-popup-noti-report',
  templateUrl: './rd-author-content-popup-noti-report.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorContentPopupNotiReportOrgan implements OnInit {
  @Input() faIcon = faCheckCircle;

  constructor() {}

  ngOnInit(): void {}
}
