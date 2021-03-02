import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-detail-image',
  templateUrl: './detail-image.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailImageAtom implements OnInit {
  @Input() src = '/global-assets/images/0004.webp';
  constructor() {}

  ngOnInit(): void {}
}
