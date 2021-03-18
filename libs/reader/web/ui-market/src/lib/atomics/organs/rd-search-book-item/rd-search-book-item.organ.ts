import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-search-book-item',
  templateUrl: './rd-search-book-item.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookItemOrgan implements OnInit {
  @Input() category = 'Phiêu lưu, hài hước, hành động';
  @Input() status = 'Hoàn thành';
  @Input() title = 'Em là nhà';

  constructor() {}

  ngOnInit(): void {}
}
