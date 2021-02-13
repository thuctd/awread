import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-default-cover',
  templateUrl: './default-cover.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultCoverAtom implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
