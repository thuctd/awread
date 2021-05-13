import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'molec-navbar-auth-logged',
  templateUrl: './navbar-auth-logged.molec.html',
  styles: [
    `
      :host {
        display: inline-block;
        position: relative;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAuthLoggedMolec implements OnInit {
  @Input() user = {};
  isToggleDropdown: boolean = false;
  constructor() { }
  // @Output() submitEvent = new EventEmitter();
  ngOnInit(): void {
  }

  submitEvent(event) {
    this.isToggleDropdown = !this.isToggleDropdown;
  }
}
