import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-slider',
  templateUrl: './slider.atom.html',
  styleUrls: ['./slider.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderAtom implements OnInit {

  @Input() imageObject = [{
    image: 'https://via.placeholder.com/1200x500.png',
    thumbImage: 'https://via.placeholder.com/1200x500.png',
    alt: 'alt of image'
  },
  {
    image: 'https://via.placeholder.com/1200x500.png',
    thumbImage: 'https://via.placeholder.com/1200x500.png',
    alt: 'Image alt'
  },
  {
    image: 'https://via.placeholder.com/1200x500.png',
    thumbImage: 'https://via.placeholder.com/1200x500.png',
    alt: 'Image alt'
  }
  ];

  constructor() { }

  ngOnInit(): void { }
}
