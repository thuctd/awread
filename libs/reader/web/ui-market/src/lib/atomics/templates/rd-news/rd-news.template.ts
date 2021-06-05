import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-news',
  templateUrl: './rd-news.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsTemplate implements OnInit {
  @Input() news = [];

  constructor() {}

  ngOnInit(): void {}
}
