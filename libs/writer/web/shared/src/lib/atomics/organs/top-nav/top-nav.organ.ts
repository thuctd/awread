import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import type { User } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavOrgan implements OnInit {
  @Input() user = [];
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
