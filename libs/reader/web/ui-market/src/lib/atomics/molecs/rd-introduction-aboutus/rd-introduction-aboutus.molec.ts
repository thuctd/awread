import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-rd-introduction-aboutus',
  templateUrl: './rd-introduction-aboutus.molec.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
      :host {
        display: block;
      }
      :host .image {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/global-assets/images/aboutUs.webp');
        height: 35.6vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      :host .text-8c5xl {
        font-size: 7rem;
      }

      :host .aboutUs {
        font-family: 'Roboto Condensed', sans-serif;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionAboutusMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
