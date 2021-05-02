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
  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'l';
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() bookId = 'bvxz_324345seQ6x';

  constructor() {}

  ngOnInit(): void {}
}
