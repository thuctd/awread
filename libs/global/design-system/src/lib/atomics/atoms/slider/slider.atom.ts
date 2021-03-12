import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-slider',
  templateUrl: './slider.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderAtom implements OnInit {
  @Input() showArrow = 'true';
  @Input() imageSize = {
    width: '100%',
    height: '650px',
    space: 1,
  };
  @Input() imageObject = [
    {
      image: '/global-assets/images/image.webp',
      thumbImage: '/global-assets/images/image.webp',
      alt: 'alt of image',
    },
    {
      image: '/global-assets/images/image.webp',
      thumbImage: '/global-assets/images/image.webp',
      alt: 'Image alt',
    },
    {
      image: '/global-assets/images/image.webp',
      thumbImage: '/global-assets/images/image.webp',
      alt: 'Image alt',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
