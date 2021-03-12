import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
