import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-follower-item',
  templateUrl: './rd-author-follower-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorFollowerItemMolec implements OnInit {
  @Input() image = {
    srcImg: '/global-assets/images/logoAwread.webp',
    alt: 'avatar',
  };

  @Input() user = {
    nickName: 'camthuong2502',
    fullName: 'Hà Cẩm Thương',
  };
  @Input() faIcon = faPlus;
  @Input() class = 'bg-green-primary text-white rounded-lg py-1.5 px-2';

  constructor() {}

  ngOnInit(): void {}
}
