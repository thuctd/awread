import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-comment',
  templateUrl: './comment.atom.html',
  styleUrls: ['./comment.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentAtom implements OnInit {
  @Input() faIcon = faComments;
  @Input() countComment = '40';

  constructor() { }

  ngOnInit(): void {
  }

}
