import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-rating-book',
  templateUrl: './list-rating-book.atom.html',
  styleUrls: ['./list-rating-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRatingBookAtom implements OnInit {
  @Input() faIcon = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
