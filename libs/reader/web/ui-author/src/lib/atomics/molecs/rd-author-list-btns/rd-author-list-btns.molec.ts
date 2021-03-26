import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RdAuthorPopupUnblockTemplate } from '../../templates/rd-author-popup-unblock/rd-author-popup-unblock.template';
import { RdAuthorPopupUnfollowTemplate } from '../../templates/rd-author-popup-unfollow/rd-author-popup-unfollow.template';
@Component({
  selector: 'molec-rd-author-list-btns',
  templateUrl: './rd-author-list-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListBtnsMolec implements OnInit {
  @Input() btnClick = new EventEmitter();
  @Input() class = 'px-5 py-2 rounded-lg';
  @Input() follow = true;
  @Input() isBlock = false;

  constructor(private MatDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogUnFollow($event) {
    this.MatDialog.open(RdAuthorPopupUnfollowTemplate, {
      width: '30rem',
      height: '20rem',
    });
  }

  openDiaLogUnBlock($event) {
    this.MatDialog.open(RdAuthorPopupUnblockTemplate, {
      width: '30rem',
      height: '20rem',
    });
  }
}
