import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forgot-actions',
  templateUrl: './forgot-actions.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotActionsMolec implements OnInit {
  constructor() {}
  @Input() title = 'Gửi Email Hướng Dẫn';
  @Input() active = false;
  @Output() submitEvent = new EventEmitter();
  ngOnInit(): void {}
}
