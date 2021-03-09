import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'forgot-options',
  templateUrl: './forgot-options.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotOptionsMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
