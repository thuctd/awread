import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'wrt-topnav-right',
  templateUrl: './wrt-topnav-right.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtTopnavRightMolec implements OnInit {
  @Input() user = [];
  @Input() searchControl: FormControl = new FormControl("");
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
