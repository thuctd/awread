import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-aboutus',
  templateUrl: './rd-introduction-aboutus.organ.html',
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
export class RdIntroductionAboutUsOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
