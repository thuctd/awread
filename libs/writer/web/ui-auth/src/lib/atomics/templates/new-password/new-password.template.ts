import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-new-password',
  templateUrl: './new-password.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordTemplate implements OnInit {
  @Output() updateNewPassword = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
