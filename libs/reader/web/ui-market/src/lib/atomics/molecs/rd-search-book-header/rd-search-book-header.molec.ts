import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-search-book-header',
  templateUrl: './rd-search-book-header.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookHeaderMolec implements OnInit {
  @Input() number = 10;

  constructor() {}

  ngOnInit(): void {}
}
