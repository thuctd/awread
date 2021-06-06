import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-status-book',
  templateUrl: './status-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBookAtom implements OnInit {
  @Input() completed: boolean;

  constructor() {}

  ngOnInit(): void {}
}
