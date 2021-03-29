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
    height: window.innerWidth > 1280 ? '600px' : window.innerWidth > 1024 ? '500px' : window.innerWidth > 768 ? '425' : '200px',
    space: 1,
  };
  @Input() imageObject = [
    {
      image: 'IMG 1',
      thumbImage: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      alt: 'alt of image',
      id: '1'
    },
    {
      image: 'IMG 2',
      thumbImage: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      alt: 'Image alt',
      id: '2'
    },
    {
      image: 'IMG 3',
      thumbImage: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      alt: 'Image alt',
      id: '3'
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
