import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-rating',
  templateUrl: './rating.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingAtom implements OnInit {
  @Input() faIconGood = faHeart;
  @Input() faIconBad = faHeartBroken;
  @Input() isReview = true;
  @Input() isSize = true;

  constructor() {}

  ngOnInit(): void {}
}
