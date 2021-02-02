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

  constructor() {}

  @Input() customOptions: OwlOptions = {
    loop: true,
    navSpeed: 500,
    nav: true,
    navText: [this.prevIcon, this.nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 1,
        stagePadding: -10,
      },
    },
  };

  ngOnInit(): void {}
}
