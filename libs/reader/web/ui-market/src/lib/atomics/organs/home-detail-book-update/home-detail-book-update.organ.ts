import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-detail-book-update',
  templateUrl: './home-detail-book-update.organ.html',
  styleUrls: ['./home-detail-book-update.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailBookUpdateOrgan implements OnInit {
  @Input() titlePage = 'Truyện mới cập nhật';
  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
