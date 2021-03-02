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
  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
