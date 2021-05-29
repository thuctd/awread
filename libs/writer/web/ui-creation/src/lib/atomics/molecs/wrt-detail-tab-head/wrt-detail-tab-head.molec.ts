import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wrt-detail-tab-head',
  templateUrl: './wrt-detail-tab-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      .shadow-b {
        box-shadow: 0 4px 3px -1px rgba(0, 0, 0, 0.06);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailTabHeadMolec implements OnInit {
  @Input() tabsHead = [];

  @Output() clickedBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
