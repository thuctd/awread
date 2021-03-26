import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-home',
  templateUrl: './home.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate implements OnInit {
  @Input() books = [];
  @Input() genres = [];
  @Input() bookByGenre = [];
  @Output() filterItemsByGenre = new EventEmitter();
  @Input() loading: boolean;
  constructor() { }

  ngOnInit(): void { }
}
