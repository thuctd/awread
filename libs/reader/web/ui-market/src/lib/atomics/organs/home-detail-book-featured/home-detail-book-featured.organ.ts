import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-detail-book-featured',
  templateUrl: './home-detail-book-featured.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailBookFeaturedOrgan implements OnInit {
  @Input() page = {
    name: 'Truyện nổi bật',
    href: ['/feature-books']
  };
  @Input() books = [];
  @Input() displayUI = {
    ui: {
      isAuthor: false,
      isRating: false,
      isIcon: false,
      isDate: false,
    },
    size: {
      sizeTitle: 'l',
      sizeBtn: true,
    },
  };
  @Input() totalBook;
  @Input() loading;
  @Output() displayActivePageFeature = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
