import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wrt-template-account-complete',
  templateUrl: './wrt-account-complete.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtAccountCompleteTemplate implements OnInit {
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
