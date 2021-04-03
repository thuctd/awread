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
  @Input() size: 's' | 'm' | 'l' | 'xl' = 's';
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() bookId = 'bvxz_324345seQ6x';
  @Input() height = 'h-72';

  constructor() {}

  ngOnInit(): void {}
}
