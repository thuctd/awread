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
  @Input() title = 'Em là nhà';
  @Input() imgUrl = '';

  constructor() { }

  ngOnInit(): void { }
}
