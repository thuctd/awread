import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-author-name',
  templateUrl: './rd-author-name.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorNameAtom implements OnInit {
  @Input() name = 'Cẩm Thương';
  @Input() fullName = 'Hà Cẩm Thương';

  constructor() {}

  ngOnInit(): void {}
}
