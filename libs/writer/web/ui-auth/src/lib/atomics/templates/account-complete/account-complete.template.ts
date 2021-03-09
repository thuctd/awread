import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-account-complete',
  templateUrl: './account-complete.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCompleteTemplate implements OnInit {
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
