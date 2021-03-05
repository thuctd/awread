import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-followers',
  templateUrl: './rd-author-followers.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorFollowersMolec implements OnInit {
  @Input() image = {
    srcImg: '/global-assets/images/avatar-mrmrs.webp',
    alt: 'avatar',
  };

  @Input() user = {
    nickName: 'camthuong2502',
    fullName: 'Hà Cẩm Thương',
  };
  @Input() faIcon = faPlus;
  @Input() class = 'bg-green-400 text-white rounded-lg py-1.5 px-2';

  constructor() {}

  ngOnInit(): void {}
}
