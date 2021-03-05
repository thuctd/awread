import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-rd-author-list-btns',
  templateUrl: './rd-author-list-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorListBtnsMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
