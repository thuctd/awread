import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-avatar-item-grid',
  templateUrl: './rd-author-avatar-item-grid.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorAvatarItemGridMolec implements OnInit {
  @Input() user;
  @Input() facebook = 'Camthuong95';
  @Input() globe = 'https://awreadbook.com';

  @Input() srcAvatar = '/global-assets/images/logoAwread.webp';

  constructor() {}

  ngOnInit(): void {}
}
