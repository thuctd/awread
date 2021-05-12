import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-detail-book-update',
  templateUrl: './home-detail-book-update.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailBookUpdateOrgan implements OnInit {
  @Input() isInfoNovel: true | false = false;
  @Input() titlePage = 'Truyện mới cập nhật';
  @Input() books = [];
  @Input() loading: boolean;
  @Input() categories = [];
  @Input() tabs = [
    {
      name: 'Tất cả',
      isActive: true,
      isInfoNovel: false,
    },
    {
      name: 'Truyện dài',
      isActive: false,
      isInfoNovel: false,
    },
    {
      name: 'Truyện ngắn',
      isActive: false,
      isInfoNovel: false,
    },
    {
      name: 'Tản văn',
      isActive: false,
      isInfoNovel: true,
    },
  ];

  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
