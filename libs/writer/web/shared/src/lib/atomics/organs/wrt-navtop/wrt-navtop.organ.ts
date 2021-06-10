import { FormControl } from '@angular/forms';
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
  @Output() signoutEvent = new EventEmitter();
  @Input() searchControl: FormControl = new FormControl("");
  constructor() { }

  ngOnInit(): void { }
}
