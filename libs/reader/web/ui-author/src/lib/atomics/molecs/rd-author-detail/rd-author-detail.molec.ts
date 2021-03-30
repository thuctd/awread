import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RdAuthorPopupListFollowersTemplate } from '../../templates/rd-author-popup-list-followers/rd-author-popup-list-followers.template';
@Component({
  selector: 'molec-rd-author-detail',
  templateUrl: './rd-author-detail.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorDetailMolec implements OnInit {
  @Input() numberProduct = '5';
  @Input() numberFollow = '10';
  @Input() authorId = '123456zxcasdwqe_zxxzc';
  @Input() excerpt = `Chào chúng cậu tớ là Cẩm Thương ...`;
  @Input() name = 'Cẩm Thương';
  @Input() fullName = 'Hà Cẩm Thương';
  @Input() isFollow = true;
  @Input() isBlock = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDiaLogFollowers($event) {
    this.matDialog.open(RdAuthorPopupListFollowersTemplate, {
      width: '30rem',
      height: '46rem',
    });
  }
}
