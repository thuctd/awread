import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-detail-link-btns',
  templateUrl: './wrt-detail-link-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailLinkBtnsMolec implements OnInit {
  @Input() formActiveStatus = false;
  constructor() {}

  ngOnInit(): void {}
}
