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
  @Input() newsId;
  @Input() title = 'Title';
  @Input() class = 'text-gray-text';

  constructor() {}

  ngOnInit(): void {}
}
