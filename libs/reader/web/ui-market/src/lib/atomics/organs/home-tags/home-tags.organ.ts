import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Genre } from '@awread/reader/web/feature-market';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'home-tags',
  templateUrl: './home-tags.organ.html',
  styleUrls: ['./home-tags.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTagsOrgan implements OnInit {
  prevIcon = `<img src="/global-assets/images/arrow_left.webp" alt="arrow_left">`;
  nextIcon = `<img src="/global-assets/images/arrow_right.webp" alt="arrow_right">`;
  @Input() titlePage = 'Tags';
  @Input() loading: false | true = false;
  @Output() filterItemsByGenre = new EventEmitter();
  @Input() genres = [
    {
      id: 1,
      name: 'Lãng mạn'
    }
  ];

  @Input() items = [
    {
      id: "1",
      title: 'Cô gái theo đuổi năm nào',
      imageUrl: 'https://via.placeholder.com/260x370.png',
      categoryId: "1",
      genres: [1, 3],
    }
  ];

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
        items: 2,
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

  constructor() { }

  ngOnInit(): void { }

}
