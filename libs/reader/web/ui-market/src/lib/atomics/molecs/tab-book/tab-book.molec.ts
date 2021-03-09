import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import type { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'tab-book',
  templateUrl: './tab-book.molec.html',
  styleUrls: ['./tab-book.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBookMolec implements OnInit {
  prevIcon = `<img src="/global-assets/images/arrow_left.webp" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.webp" alt="arrow_right">`;

  @Input() tabBooks = [
    {
      title: 'Cô gái chúng ta cùng theo đuổi năm nào',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: true,
    },
    {
      title: 'Yêu em từ cái nhìn đầu tiên',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Tháng 4 là lời nói dối của em',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Em là nhà!!!',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Cô gái chúng ta cùng theo đuổi năm nào',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: true,
    },
    {
      title: 'Yêu em từ cái nhìn đầu tiên',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Tháng 4 là lời nói dối của em',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Em là nhà!!!',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Cô gái chúng ta cùng theo đuổi năm nào',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: true,
    },
    {
      title: 'Yêu em từ cái nhìn đầu tiên',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Tháng 4 là lời nói dối của em',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
    {
      title: 'Em là nhà!!!',
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      isActive: false,
    },
  ];

  constructor() {}

  @Input() customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    nav: true,
    navText: [this.prevIcon, this.nextIcon],
    responsive: {
      0: {
        items: 2,
      },
      320: {
        items: 3,
      },
      380: {
        items: 3,
      },
      600: {
        items: 4,
      },
      768: {
        items: 5,
      },
      940: {
        items: 6,
      },
      1280: {
        items: 8,
      },
    },
  };

  ngOnInit(): void {}
}
