import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-rating',
  templateUrl: './rating.atom.html',
  styleUrls: ['./rating.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingAtom implements OnInit {
  @Input() faIconGood = faHeart;
  @Input() faIconBad = faHeartBroken;
  @Input() isReview = true;

  constructor() { }

  ngOnInit(): void {
  }

}
