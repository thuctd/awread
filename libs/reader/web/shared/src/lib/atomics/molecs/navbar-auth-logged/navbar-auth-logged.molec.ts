import { Component, OnInit, ChangeDetectionStrategy, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'molec-navbar-auth-logged',
  templateUrl: './navbar-auth-logged.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAuthLoggedMolec implements OnInit {

  constructor() { }
  @Output() submitEvent = new EventEmitter();
  ngOnInit(): void {
  }

}
