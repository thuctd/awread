import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-rd-author-book-grid',
  templateUrl: './rd-author-book-grid.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorBookGridMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
