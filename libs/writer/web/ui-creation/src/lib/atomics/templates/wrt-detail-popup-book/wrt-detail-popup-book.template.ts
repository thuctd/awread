import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-template-detail-popup-book',
  templateUrl: './wrt-detail-popup-book.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailPopupBookTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
