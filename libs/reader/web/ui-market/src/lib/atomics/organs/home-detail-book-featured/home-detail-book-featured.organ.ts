import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-home-detail-book-featured',
  templateUrl: './home-detail-book-featured.organ.html',
  styleUrls: ['./home-detail-book-featured.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailBookFeaturedOrgan implements OnInit {
  @Input() isSize = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
