import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-img-m',
  templateUrl: './img-m.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgMAtom implements OnInit {
  @Input() size: 's' | 'm' | 'l' | 'xl' | 'xxl' | 'other' = 'xl';
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() bookId = 'bvxz_324345seQ6x';
  @Input() sizeImg = '';

  constructor() {}

  ngOnInit(): void {}
}
