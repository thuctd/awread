import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-home-mobile',
  templateUrl: './home-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMobileTemplate implements OnInit {
  @Input() imageSize = {
    width: '100%',
    height: '200px',
    space: 1,
  };
  @Input() loadingBooksLatest;
  @Input() sliders = [];
  @Input() totalBook;
  @Input() getGoodBooks = [];
  @Input() getLatestBooks = [];
  @Input() getFeatureBooks = [];
  @Input() genres = [];
  @Input() bookByGenre = [];
  @Input() categories = [];
  @Input() loading: boolean;
  @Input() currentPageLatest = 1;
  @Input() currentPageFeature = 1;
  @Output() emitBooks = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();
  @Output() filterItemsByGenre = new EventEmitter();
  @Output() pageChange = new EventEmitter();
  @Input() isLoadingFeature;
  @Input() totalBookFeatured;
  @Input() hasMoreLatest;
  @Input() hasMoreFeature;
  @Output() displayActivePageFeature = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
