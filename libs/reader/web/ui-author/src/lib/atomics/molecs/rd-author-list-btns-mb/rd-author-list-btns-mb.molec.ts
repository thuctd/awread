import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RdAuthorPopupUnfollowMbTemplate } from '../../templates/rd-author-popup-unfollow-mb/rd-author-popup-unfollow-mb.template';
import { RdAuthorPopupUnblockMbTemplate } from '../../templates/rd-author-popup-unblock-mb/rd-author-popup-unblock-mb.template';

@Component({
  selector: 'molec-rd-author-list-btns-mb',
  templateUrl: './rd-author-list-btns-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListBtnsMbMolec implements OnInit {
  @Input() classBtn1 = 'py-1 w-full rounded text-sm';
  @Input() classBtn2 = 'py-1 w-5/12 rounded';
  @Input() isFollow = true;
  @Input() isBlock = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogUnFollow($event) {
    this.matDialog.open(RdAuthorPopupUnfollowMbTemplate, {
      width: '17rem',
      height: '18rem',
    });
  }

  openDiaLogUnBlockMb($event) {
    this.matDialog.open(RdAuthorPopupUnblockMbTemplate, {
      width: '17rem',
      height: '20rem',
    });
  }
}
