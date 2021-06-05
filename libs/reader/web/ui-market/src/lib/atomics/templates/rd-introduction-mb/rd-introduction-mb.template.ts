import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-introduction-mb',
  templateUrl: './rd-introduction-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .image {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/global-assets/images/aboutUs.webp');
        height: 20vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionMbTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
