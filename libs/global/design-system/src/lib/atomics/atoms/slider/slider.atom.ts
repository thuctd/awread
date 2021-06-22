import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'atom-slider',
  templateUrl: './slider.atom.html',
  styleUrls: ['./slider.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderAtom implements OnInit {

  @Input() items = [];

  prevIcon = `<img src="/global-assets/images/arrow_left.webp" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.webp" alt="arrow_right">`;

  @Input() customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    smartSpeed: 1500,
    navSpeed: 1500,
    navText: [this.prevIcon, this.nextIcon],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor() { }

  ngOnInit(): void { }
}
