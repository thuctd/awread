import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-founder',
  templateUrl: './rd-introduction-founder.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .w-168 {
        width: 42rem;
      }
      :host .text-4c5xl {
        font-size: 2.5rem;
      }
      :host .bg-green-dark {
        background-color: #b1dac6;
      }
      :host .bg-blue-dark {
        background-color: #d5edf8;
      }
      :host .bg-pink-dark {
        background-color: #f5e7e7;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionFounderOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
