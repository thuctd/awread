import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'organ-navbar-buttons',
  templateUrl: './navbar-buttons.organ.html',
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarButtonsOrgan implements OnInit {
  @Input() isLogin = false;
  @Input() items = [];
  @Input() searchControl = new FormControl();
  @Output() eventSearch = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
