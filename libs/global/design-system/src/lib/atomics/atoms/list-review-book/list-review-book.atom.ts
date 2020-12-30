import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faComments, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-review-book',
  templateUrl: './list-review-book.atom.html',
  styleUrls: ['./list-review-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListReviewBookAtom implements OnInit {
  @Input() faIconEye = faEye;
  @Input() faIconComments = faComments;
  @Input() countView = '696969k';
  @Input() countPositive = 35;
  @Input() countNegative = 69;

  constructor() { }

  ngOnInit(): void {
  }

}
