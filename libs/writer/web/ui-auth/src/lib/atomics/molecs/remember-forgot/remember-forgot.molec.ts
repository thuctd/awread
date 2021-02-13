import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'remember-forgot',
  templateUrl: './remember-forgot.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RememberForgotMolec implements OnInit {
  @Input() link = '/forgot';
  constructor() {}

  ngOnInit(): void {}
}
