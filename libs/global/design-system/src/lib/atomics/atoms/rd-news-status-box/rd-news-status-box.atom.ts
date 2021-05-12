import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-news-status-box',
  templateUrl: './rd-news-status-box.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsStatusBoxAtom implements OnInit {
  @Input() bgColor: 'red-400';
  @Input() text: 'hot';

  constructor() {}

  ngOnInit(): void {}
}
