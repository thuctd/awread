import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-circle-image',
  templateUrl: './circle-image.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleImageAtom implements OnInit {
  @Input() src = '/global-assets/images/avatar-mrmrs.webp';
  constructor() {}

  ngOnInit(): void {}
}
