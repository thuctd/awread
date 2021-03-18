import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-remember-forgot',
  templateUrl: './wrt-remember-forgot.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtRememberForgotMolec implements OnInit {
  @Input() link = '/forgot';
  constructor() {}

  ngOnInit(): void {}
}
