import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-img-m',
  templateUrl: './img-m.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .h-84 {
        height: 21rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgMAtom implements OnInit {
  @Input() size: 's' | 'm' | 'l' | 'xl' = 's';
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() altImg = 'Placeholder';

  constructor() {}

  ngOnInit(): void {}
}
