import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-introduction-aboutus',
  templateUrl: './rd-introduction-aboutus.organ.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
      :host {
        display: block;
      }
      :host .top-136 {
        top: 34rem;
      }
      :host .text-7c5xl {
        font-size: 7.5rem;
      }
      .welcome {
        font-family: 'Sacramento', cursive;
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
