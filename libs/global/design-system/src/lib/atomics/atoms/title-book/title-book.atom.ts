import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-title-book',
  templateUrl: './title-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host a {
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBookAtom implements OnInit {
  @Input() titleBook = 'Cô gái chúng ta cùng theo đuổi năm nào!';
  @Input() size: 's' | 'm' | 'l' = 's';
  @Input() bookId = 'bvxz_324345seQ6x';

  constructor() {}

  ngOnInit(): void {}
}
