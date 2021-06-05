import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-founder-mb',
  templateUrl: './rd-introduction-founder-mb.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .bg-green-light {
        background-color: #b1dac6;
      }
      :host .bg-pink {
        background-color: #f5e7e7;
      }
      :host .-z-index {
        z-index: -1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionFounderMbOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
