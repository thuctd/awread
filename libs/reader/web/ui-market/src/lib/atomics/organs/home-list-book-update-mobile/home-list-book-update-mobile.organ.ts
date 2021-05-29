import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'organ-home-list-book-update-mobile',
  templateUrl: './home-list-book-update-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListBookUpdateMobileOrgan implements OnInit {
  @Input() counter = Array;
  @Input() titlePage = 'Truyện mới cập nhật';
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

  @Input() tabs = [
    {
      name: 'Tất cả',
      isNovel: false,
    },
    {
      name: 'Truyện dài',
      isNovel: false,
    },
    {
      name: 'Truyện ngắn',
      isNovel: false,
    },
    {
      name: 'Tản văn',
      isNovel: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
