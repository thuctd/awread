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
  @Input() fullName = 'Hà Cẩm Thương';
  @Input() name = 'Cẩm Thương';
  @Input() faIcon = faEllipsisH;
  @Input() follow = true;
  @Input() isBlock = true;

  constructor(private MatDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogMenu($event) {
    this.MatDialog.open(RdAuthorPopupMenuMbTemplate, {
      width: '26rem',
      height: '25rem',
    });
  }
}
