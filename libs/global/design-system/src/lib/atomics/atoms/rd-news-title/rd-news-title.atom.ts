import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-news-title',
  templateUrl: './rd-news-title.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsTitleAtom implements OnInit {
  @Input() title = 'Title';
  @Input() isDisplay = false;
  @Input() class = '';

  constructor() {}

  ngOnInit(): void {}
}
