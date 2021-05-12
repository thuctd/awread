import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-books-grid',
  templateUrl: './books-grid.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksGridOrgan implements OnInit {
  @Input() bookId = '';
  @Input() title = 'Em là nhà';
  @Input() imgUrl = '';
  @Input() chapters = [];

  constructor() { }

  ngOnInit(): void { }
}
