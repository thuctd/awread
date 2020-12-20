import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faEye, faComments, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detail-rating',
  templateUrl: './detail-rating.atom.html',
  styleUrls: ['./detail-rating.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailRatingAtom implements OnInit {
  @Input() faIconEye = faEye;
  @Input() faIconStar = faStar;
  @Input() faIconComments = faComments;
  @Input() chapterCountView = '696969k';
  @Input() chapterCountComments = '2020-12-16';

  constructor() { }

  ngOnInit(): void {
  }

}
