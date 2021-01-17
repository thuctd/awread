import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';

@Component({
  selector: 'organ-detail-book-reviews',
  templateUrl: './detail-book-reviews.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookReviewsOrgan implements OnInit {
  @Input() reviews = [
    {
      userName: 'Lê Ngọc Quý',
      rate: true,
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM'
     },
    {
      userName: 'Lê Ngọc Quý',
      rate: true,
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM'
     },
    {
      userName: 'Lê Ngọc Quý',
      rate: true,
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM'
     },
    {
      userName: 'Lê Ngọc Quý',
      rate: true,
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM'
     },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
