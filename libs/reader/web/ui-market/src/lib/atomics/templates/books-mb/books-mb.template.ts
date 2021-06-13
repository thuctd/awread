import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-books-mb',
  templateUrl: './books-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksMbTemplate implements OnInit {
  isMenu = false;
  @Input() loading;
  @Input() titlePage;
  @Input() hasNextPage;
  @Input() books = [];
  @Input() topBooks = [];
  @Input() items = [];
  @Output() moreBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
