import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-books-grid',
  templateUrl: './books-grid.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksGridOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
