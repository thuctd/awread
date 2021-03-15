import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-link',
  templateUrl: './link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkAtom implements OnInit {
  @Input() title = 'title';
  @Input() href = 'composed';

  constructor() {}

  ngOnInit(): void {}
}
