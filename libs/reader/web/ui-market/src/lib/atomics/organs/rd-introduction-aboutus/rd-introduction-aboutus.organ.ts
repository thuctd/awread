import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-aboutus',
  templateUrl: './rd-introduction-aboutus.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .top-136 {
        top: 34rem;
      }
      .welcome {
        font-family: 'Sacramento', cursive;
      }
      .text {
        font-family: 'Barlow Semi Condensed', sans-serif;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionAboutUsOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
