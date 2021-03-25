import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-aboutus',
  templateUrl: './rd-introduction-aboutus.organ.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&display=swap');
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
  @Input() faIcon = faArrowRight;
  constructor() {}

  ngOnInit(): void {}
}
