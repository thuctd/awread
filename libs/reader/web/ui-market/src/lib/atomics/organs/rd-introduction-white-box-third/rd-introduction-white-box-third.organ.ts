import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-white-box-third',
  templateUrl: './rd-introduction-white-box-third.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .pb-120 {
        padding-bottom: 30rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionWhiteBoxThirdOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
