import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-review-action',
  templateUrl: './review-action.atom.html',
  styleUrls: ['./review-action.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewActionAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() icon = faHeart;
  @Input() title = 'Rất tích cực';
  constructor() { }

  ngOnInit(): void {
  }

}
