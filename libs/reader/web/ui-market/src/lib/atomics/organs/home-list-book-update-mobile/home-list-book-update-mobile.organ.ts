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
