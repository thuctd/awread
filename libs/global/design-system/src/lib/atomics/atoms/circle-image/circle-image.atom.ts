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
  @Input() size: 's' | 'm' | 'l' | 'xl' = 'm';
  @Input() src = '/global-assets/images/logoAwread.webp';
  constructor() {}

  ngOnInit(): void {}
}
