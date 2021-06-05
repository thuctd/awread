import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-rd-introduction-content-mb',
  templateUrl: './rd-introduction-content-mb.molec.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
      :host {
        display: block;
      }
      .welcome {
        font-family: 'Sacramento', cursive;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionContentMbMolec implements OnInit {
  @Input() faIcon = faArrowRight;
  constructor() {}

  ngOnInit(): void {}
}
