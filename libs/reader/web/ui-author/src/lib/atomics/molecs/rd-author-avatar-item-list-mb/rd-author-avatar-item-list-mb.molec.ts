import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
