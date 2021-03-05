import { faPlus, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-rd-author-btn',
  templateUrl: './rd-author-btn-follow.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorBtnFollowAtom implements OnInit {
  @Input() faPlus = faPlus;
  @Input() faUser = faUser;
  @Input() faCheck = faCheck;
  @Input() follow = true;

  constructor() {}

  ngOnInit(): void {}

  isFollow() {
    this.follow = !this.follow;
  }
}
