import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'organ-home-list-book-update-mobile',
  templateUrl: './home-list-book-update-mobile.organ.html',
  styleUrls: ['./home-list-book-update-mobile.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookUpdateMobileOrgan implements OnInit {
  @Input() counter = Array;
  @Input() titlePage = 'Truyện mới cập nhật';
  prevIcon = `<img src="/global-assets/images/arrow_left.png" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.png" alt="arrow_right">`;
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() altImg = 'Placeholder';

  constructor() {}

  @Input() customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    nav: true,
    autoWidth: false,
    navText: [this.prevIcon, this.nextIcon],
    responsive: {
      0: {
        items: 3,
      },
      320: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };

  ngOnInit(): void {}
}
