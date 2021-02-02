import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-list-detail-book-update-mobile',
  templateUrl: './list-detail-book-update-mobile.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDetailBookUpdateMobileMolec implements OnInit {
  @Input() counter = Array;
  @Input() isNumber = 6;

  constructor() {}

  ngOnInit(): void {}
}
