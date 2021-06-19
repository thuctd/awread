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
  @Input() book = {
    updatedAt: '0000-00-00'
  };

  constructor() { }

  ngOnInit(): void { }
}
