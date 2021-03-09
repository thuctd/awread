import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-head',
  templateUrl: './list-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListHeadMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
