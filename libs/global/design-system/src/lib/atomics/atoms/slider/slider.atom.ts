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
    height: '600px',
    space: 1,
  };
  @Input() imageObject = [
    {
      image: 'https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-may-tinh-dep_095242594.jpg',
      thumbImage: 'https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-may-tinh-dep_095242594.jpg',
      alt: 'alt of image',
    },
    {
      image: 'https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-may-tinh-dep_095242594.jpg',
      thumbImage: 'https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-may-tinh-dep_095242594.jpg',
      alt: 'Image alt',
    },
    {
      image: 'https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-may-tinh-dep_095242594.jpg',
      thumbImage: 'https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-may-tinh-dep_095242594.jpg',
      alt: 'Image alt',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
