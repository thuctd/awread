import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-introduction',
  templateUrl: './rd-introduction.template.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .pb-160 {
        padding-bottom: 40rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
