import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'organ-home-list-book-featured-mobile',
  templateUrl: './home-list-book-featured-mobile.organ.html',
  styleUrls: ['./home-list-book-featured-mobile.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookFeaturedMobileOrgan implements OnInit {
  @Input() titlePage = 'Truyện nổi bật';
  @Input() counter = Array;
  prevIcon = `<img src="/global-assets/images/arrow_left.png" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.png" alt="arrow_right">`;
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() altImg = 'Placeholder';

  constructor() {}

  @Input() customOptions: OwlOptions = {
    loop: true,
    navSpeed: 500,
    nav: true,
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
