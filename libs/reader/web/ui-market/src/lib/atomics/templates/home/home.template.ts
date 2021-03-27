import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-home',
  templateUrl: './home.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate implements OnInit {
  @Input() books = [];
  @Input() topBook = {
    imgUrl: '',
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    id: '1'
  };
  @Input() sliders = [
    {
      image: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      thumbImage: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      alt: 'alt of image',
    },
    {
      image: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      thumbImage: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      alt: 'Image alt',
    },
    {
      image: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      thumbImage: 'https://cohet.vn/upload/data/images/do-hoa/background/anh-nen-anime-dep-2.jpg',
      alt: 'Image alt',
    },
  ];
  @Input() getGoodBooks = [];
  @Input() getLatestBooks = [];
  @Input() getFeatureBooks = [];
  @Input() genres = [];
  @Input() bookByGenre = [];
  @Output() filterItemsByGenre = new EventEmitter();
  @Input() loading: boolean;
  constructor() { }

  ngOnInit(): void { }
}
