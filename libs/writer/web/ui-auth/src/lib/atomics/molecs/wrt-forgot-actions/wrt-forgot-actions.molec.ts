import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wrt-forgot-actions',
  templateUrl: './wrt-forgot-actions.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtForgotActionsMolec implements OnInit {
  constructor() {}
  @Input() title = 'Gửi Email Hướng Dẫn';
  @Input() active = false;
  @Output() submitEvent = new EventEmitter();
  ngOnInit(): void {}
}
