import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-home-list-book-update',
  templateUrl: './rd-home-list-book-update.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeListBookUpdateMolec implements OnInit {
  @Input() isInfoNovel: true | false = false;
  @Input() books = [];

  constructor() {}

  ngOnInit(): void {}
}
