import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rd-author-social-link-item',
  templateUrl: './rd-author-social-link-item.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorSocialLinkItemAtom implements OnInit {
  @Input() nameIcon = 'instagram-icon';
  @Input() alt = 'instagram';
  @Input() link = 'Camthuong95';
  constructor() {}

  ngOnInit(): void {}
}
