import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'wrt-template-new-password',
  templateUrl: './wrt-new-password.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNewPasswordTemplate implements OnInit {
  @Output() updateNewPassword = new EventEmitter();
  @Input() fail;
  constructor() { }

  ngOnInit(): void { }
}
