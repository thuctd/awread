import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detail-review',
  templateUrl: './detail-review.molec.html',
  styleUrls: ['./detail-review.molec.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailReviewMolec implements OnInit {
  @Input() chapterCountView = '696969k';
  @Input() chapterCountComments = '2020-12-16';
  @Input() faIcon = faComments;
  constructor() {}

  ngOnInit(): void {}
}
