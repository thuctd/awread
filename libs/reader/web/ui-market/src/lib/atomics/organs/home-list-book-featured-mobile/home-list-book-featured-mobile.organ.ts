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
}
