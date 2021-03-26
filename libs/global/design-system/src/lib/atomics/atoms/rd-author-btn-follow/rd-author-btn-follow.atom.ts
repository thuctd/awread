import { faPlus, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() text = 'Theo dõi';
  @Input() faPlus = faPlus;
  @Input() faUser = faUser;
  @Input() faCheck = faCheck;
  @Input() follow = true;
  @Input() isBlock = true;
  @Input() classBtn1 = 'w-28 py-2 rounded-lg';
  @Input() classBtn2 = 'w-28 py-1.5 rounded-lg';
  @Output() btnClick = new EventEmitter();
  @Output() btnClickUnBlock = new EventEmitter();
  @Output() btnClickUnBlockMb = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  isFollow() {
    this.follow = !this.follow;
  }
}
