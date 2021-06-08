import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-navleft-group-icon',
  templateUrl: './wrt-navleft-group-icon.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNavleftGroupIconMolec implements OnInit {
  @Input() routes = [];

  constructor() {}

  ngOnInit(): void {}
}
