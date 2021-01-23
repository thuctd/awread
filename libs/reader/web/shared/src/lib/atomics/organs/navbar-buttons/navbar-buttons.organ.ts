import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-navbar-buttons',
  templateUrl: './navbar-buttons.organ.html',
  styles: [
    `
      :host {
        display: flex;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarButtonsOrgan implements OnInit {
  @Input() isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
