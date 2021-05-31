import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-social-menu',
  templateUrl: './wrt-social-menu.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtSocialMenuAtom implements OnInit {
  @Input() book = {
    title: ''
  };

  constructor() { }

  ngOnInit(): void { }
}
