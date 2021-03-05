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
  @Input() facebook = {
    icon: 'facebook-icon',
    text: 'Camthuong95',
    alt: 'facebook',
  };
  @Input() globe = {
    icon: 'globe-icon',
    text: 'https://awreadbook.com',
    alt: 'globe',
  };

  @Input() srcAvatar = '/global-assets/images/avatar-mrmrs.webp';

  constructor() {}

  ngOnInit(): void {}
}
