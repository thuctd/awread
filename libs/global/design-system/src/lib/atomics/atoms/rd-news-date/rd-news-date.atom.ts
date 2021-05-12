import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-news-date',
  templateUrl: './rd-news-date.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsDateAtom implements OnInit {
  @Input() date = 'May 05 2021';
  @Input() isColor: true | false = true;

  constructor() {}

  ngOnInit(): void {}
}
