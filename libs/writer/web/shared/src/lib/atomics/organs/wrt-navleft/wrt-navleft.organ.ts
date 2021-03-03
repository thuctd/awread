import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-navleft',
  templateUrl: './wrt-navleft.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .rounded-r-5xl {
        border-top-right-radius: 3.25rem;
        border-bottom-right-radius: 3.25rem;
      }
      :host .h50 {
        height: 55rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNavleftOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
