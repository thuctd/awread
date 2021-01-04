import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rd-home-icon-rating',
  templateUrl: './rd-home-icon-rating.atom.html',
  styleUrls: ['./rd-home-icon-rating.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdHomeIconRatingAtom implements OnInit {
  @Input() faIcon = faBookmark;
  @Input() topBook = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
