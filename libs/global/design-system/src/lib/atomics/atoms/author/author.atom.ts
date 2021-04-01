import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'atom-author',
  templateUrl: './author.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorAtom implements OnInit {
  @Input() authorId = 'zxcxzcxz456_zxaws123';
  @Input() authorName = 'Cẩm Thương';
  @Input() isTitle = 'Tác giả:';
  @Input() color = 'text-green-400';
  @Input() isText = true;

  constructor() {}

  ngOnInit(): void {}
}
