import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './wrt-navbar.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNavbarTemplate implements OnInit {
  @Input() user = [];
  @Output() searchEvent = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();
  @Input() searchControl: FormControl = new FormControl("");
  
  constructor() { }

  ngOnInit(): void { }
}
