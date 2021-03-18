import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-author-popup-header',
  templateUrl: './rd-author-popup-header.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupHeaderAtom implements OnInit {
  @Input() title = '10k Người theo dõi';

  constructor() {}

  ngOnInit(): void {}
}
