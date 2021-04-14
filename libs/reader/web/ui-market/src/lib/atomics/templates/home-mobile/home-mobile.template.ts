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
  @Input() sliders = [];
  @Input() getGoodBooks = [];
  @Input() getLatestBooks = [];
  @Input() getFeatureBooks = [];
  @Input() genres = [];
  @Input() bookByGenre = [];
  @Output() filterItemsByGenre = new EventEmitter();
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void { }
}
