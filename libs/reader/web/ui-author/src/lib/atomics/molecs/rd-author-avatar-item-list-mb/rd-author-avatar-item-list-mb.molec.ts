import { MatDialog } from '@angular/material/dialog';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RdAuthorPopupMenuMbTemplate } from '../../templates/rd-author-popup-menu-mb/rd-author-popup-menu-mb.template';

@Component({
  selector: 'molec-rd-author-avatar-item-list-mb',
  templateUrl: './rd-author-avatar-item-list-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorAvatarItemListMbMolec implements OnInit {
  @Input() user;
  @Input() faIcon = faEllipsisH;
  @Input() isFollow = true;
  @Input() isBlock = true;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogMenu($event) {
    this.matDialog.open(RdAuthorPopupMenuMbTemplate, {
      width: '17rem',
      height: '18rem',
    });
  }
}
