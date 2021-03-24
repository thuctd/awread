import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-founder',
  templateUrl: './rd-introduction-founder.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .w-112 {
        width: 28rem;
      }
      :host .w-160 {
        width: 40rem;
      }
      :host .bg-green-dark {
        background-color: #b1dac6;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionFounderOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
