import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'wrt-navtop',
  templateUrl: './wrt-navtop.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNavtopOrgan implements OnInit {
  @Input() user = [];
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
