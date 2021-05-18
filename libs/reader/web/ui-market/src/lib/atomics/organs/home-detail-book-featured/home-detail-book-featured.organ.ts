import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() titlePage = 'Truyện nổi bật';
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

  constructor() {}

  ngOnInit(): void {}
}
