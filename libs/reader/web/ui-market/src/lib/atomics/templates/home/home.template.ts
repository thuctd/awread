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
  @Input() books = [];
  @Input() topBook = {
    imgUrl: '',
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    id: '1'
  };
  @Input() sliders = [];
  @Input() getGoodBooks = [];
  @Input() getLatestBooks = [];
  @Input() getFeatureBooks = [];
  @Input() genres = [];
  @Input() genreBooks = [];
  @Output() filterItemsByGenre = new EventEmitter();
  @Input() loading: boolean;
  constructor() { }

  ngOnInit(): void { }
}
