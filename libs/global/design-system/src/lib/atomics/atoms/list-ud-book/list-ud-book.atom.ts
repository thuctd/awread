import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-ud-book',
  templateUrl: './list-ud-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUdBookAtom implements OnInit {
  @Input() updatedAt = '2020-12-19';

  constructor() {}

  ngOnInit(): void {}
}
