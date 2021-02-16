import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-bar-seperate',
  templateUrl: './bar-seperate.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarSeperateAtom implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
