import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-wrt-book-list-head',
  templateUrl: './wrt-book-list-head.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtBookListHeadMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
