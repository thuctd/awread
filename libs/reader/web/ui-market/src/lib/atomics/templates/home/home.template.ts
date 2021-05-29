import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-home',
  templateUrl: './home.template.html',
  styles: [
    `
      :host {
        display: block;
      }

      .h-104 {
        height: 26rem;
      }

      .loading {
        height: calc(100vh - 20rem);
      }

      .no-data {
        height: calc(100vh - 20rem);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate implements OnInit {
  @Input() loading: boolean;
  @Input() books = [];
  @Input() categories = [];
  @Input() sliders = [];
  @Input() getGoodBooks = [];
  @Input() getLatestBooks = [];
  @Input() getFeatureBooks = [];
  @Input() genres = [];
  @Input() genreBooks = [];
  @Output() emitBooks = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();
  @Output() filterItemsByGenre = new EventEmitter();
  @Output() displayActivePage = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
