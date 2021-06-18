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
  @Input() totalBookLatest;
  @Input() getGoodBooks = [];
  @Input() getLatestBooks = [];
  @Input() getFeatureBooks = [];
  @Input() genres = [];
  @Input() bookByGenre = [];
  @Input() categories = [];
  @Input() loading: boolean;
  @Input() currentPageLatest;
  @Input() currentPageFeature;
  @Output() emitBooks = new EventEmitter();
  @Output() emitAllBooks = new EventEmitter();
  @Output() filterItemsByGenre = new EventEmitter();
  @Output() pageChangeLatest = new EventEmitter();
  @Input() isLoadingFeature;
  @Input() totalBookFeatured;
  @Input() hasNextPageLatest;
  @Input() hasNextPageFeature;
  @Output() displayActivePageFeature = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
