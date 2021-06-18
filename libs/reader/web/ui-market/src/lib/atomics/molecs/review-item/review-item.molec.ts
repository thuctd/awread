import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faThumbsUp, faThumbsDown, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-review-item',
  templateUrl: './review-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewItemMolec implements OnInit {
  icons = { faThumbsUp, faThumbsDown, faHeart };
  @Input() src = '/global-assets/images/logoAwread.webp';
  @Input() review = {
    userName: 'Lê Ngọc Quý',
    rate: true,
    content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
    createAt: '04/06/2020 at 1:05 PM',
  };
  submitEvent(event) {
    console.log('submit action');
  }
  constructor() {}

  ngOnInit(): void {}
}
