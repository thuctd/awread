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
  @Input() titlePage = 'Truyện mới cập nhật';
  counter = Array;

  constructor() {}

  ngOnInit(): void {}
}
