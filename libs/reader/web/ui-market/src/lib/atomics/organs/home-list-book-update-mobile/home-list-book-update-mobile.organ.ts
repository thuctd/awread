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
  prevIcon = `<img src="/global-assets/images/arrow_left.webp" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.webp" alt="arrow_right">`;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';
  @Input() books = [];

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
      640: {
        items: 4,
      },
      728: {
        items: 5,
      },
    },
  };

  ngOnInit(): void {}
}
