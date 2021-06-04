import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'organ-home-list-book-featured-mobile',
  templateUrl: './home-list-book-featured-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      ::ng-deep .carousel1 .owl-stage {
        display: flex;
        flex-direction: row;
        position: relative;
      }

      ::ng-deep .carousel1 .owl-next {
        width: 30px;
        position: absolute;
        right: -1rem;
        top: 4.2rem;
        z-index: 40;
        cursor: pointer;
        background-color: transparent;
      }

      ::ng-deep .carousel1 .owl-prev {
        position: absolute;
        left: -1rem;
        width: 30px;
        top: 4.2rem;
        z-index: 40;
        cursor: pointer;
        background-color: transparent;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookFeaturedMobileOrgan implements OnInit {
  @Input() titlePage = 'Truyện nổi bật';
  @Input() counter = Array;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() books = [];

  prevIcon = `<img src="/global-assets/images/arrow_left.webp" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.webp" alt="arrow_right">`;
  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: false,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  constructor() {}

  ngOnInit(): void {}

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
      640: {
        items: 4,
      },
      728: {
        items: 5,
      },
    },
  };
}
