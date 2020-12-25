import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faEye, faComments, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detail-review-part',
  templateUrl: './detail-review-part.atom.html',
  styleUrls: ['./detail-review-part.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailReviewPartAtom implements OnInit {
  @Input() faIconEye = faEye;
  @Input() faIconStar = faStar;
  @Input() faIconComments = faComments;
  @Input() chapterCountView = '696969k';
  @Input() chapterCountComments = '2020-12-16';

  constructor() { }

  ngOnInit(): void {
  }

}
