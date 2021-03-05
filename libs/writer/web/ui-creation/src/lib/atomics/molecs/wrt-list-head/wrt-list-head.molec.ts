import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-list-head',
  templateUrl: './wrt-list-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtListHeadMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
