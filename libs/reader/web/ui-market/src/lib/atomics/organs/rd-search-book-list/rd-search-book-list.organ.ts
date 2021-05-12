import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-search-book-list',
  templateUrl: './rd-search-book-list.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookListOrgan implements OnInit {
  @Input() category = 'Phiêu lưu, hài hước, hành động';
  @Input() published: boolean;
  @Input() title = 'Em là nhà';
  @Input() cover = '';
  @Input() bookId = '';
  @Input() chapters = [];

  constructor() { }

  ngOnInit(): void { }
}
