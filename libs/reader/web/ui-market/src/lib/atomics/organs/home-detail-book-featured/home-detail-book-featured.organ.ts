import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-detail-book-featured',
  templateUrl: './home-detail-book-featured.organ.html',
  styleUrls: ['./home-detail-book-featured.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailBookFeaturedOrgan implements OnInit {
  @Input() size = 3;
  @Input() titlePage = 'Truyện nổi bật';
  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
