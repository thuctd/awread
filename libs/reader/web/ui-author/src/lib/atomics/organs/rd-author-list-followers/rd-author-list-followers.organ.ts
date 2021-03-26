import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RdAuthorPopupListFollowersMbTemplate } from '../../templates/rd-author-popup-list-followers-mb/rd-author-popup-list-followers-mb.template';

@Component({
  selector: 'organ-rd-author-list-followers',
  templateUrl: './rd-author-list-followers.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListFollowersOrgan implements OnInit {
  @Input() counter = Array;
  @Input() show = true;

  constructor(private MatDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogFollowers($event) {
    this.MatDialog.open(RdAuthorPopupListFollowersMbTemplate, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });
  }
}
