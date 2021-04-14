import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-footer',
  templateUrl: './footer.template.html',
  styles: [
    `
      :host {
        display: block;
      }
      @media only screen and (min-width: 640px) {
        .robotoDesktop {
          font-family: 'Roboto', sans-serif !important;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
