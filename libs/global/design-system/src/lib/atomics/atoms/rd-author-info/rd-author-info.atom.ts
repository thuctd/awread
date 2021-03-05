import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-author-info',
  templateUrl: './rd-author-info.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorInfoAtom implements OnInit {
  @Input() nameIcon = 'instagram-icon';
  @Input() alt = 'instagram';
  @Input() link = 'Camthuong95';
  constructor() {}

  ngOnInit(): void {}
}
