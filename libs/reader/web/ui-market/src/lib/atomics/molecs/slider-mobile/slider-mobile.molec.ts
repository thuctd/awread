import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'molec-slider-mobile',
  templateUrl: './slider-mobile.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      ::ng-deep .owl-stage {
        display: flex;
        flex-direction: row;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderMobileMolec implements OnInit {
  @Input() srcImg = '/global-assets/images/halo.jpg';
  @Input() altImg = 'Placeholder';
  @Input() slider = [
    {
      link: '/global-assets/images/halo.jpg',
      alt: 'Placeholder',
    },
    {
      link: 'https://via.placeholder.com/260x370.png',
      alt: 'Placeholder',
    },
  ];

  @Input() customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplayHoverPause: true,
    navSpeed: 500,
    nav: false,
    autoWidth: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
