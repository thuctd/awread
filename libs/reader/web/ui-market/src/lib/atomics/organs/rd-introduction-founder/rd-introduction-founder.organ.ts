import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-founder',
  templateUrl: './rd-introduction-founder.organ.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500&display=swap');
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
      :host .font-roboto-condensed {
        font-family: 'Roboto Condensed', sans-serif;
      }
      :host .font-roboto {
        font-family: 'Roboto', sans-serif;
      }
      :host .font-barlow-semi-condensed {
        font-family: 'Barlow Semi Condensed', sans-serif;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionFounderOrgan implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
