import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-author',
  templateUrl: './rd-author.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorTemplate implements OnInit {
  @Input() isFollow = true;
  @Input() isBlock = false;
  @Input() author;
  @Input() books = [];

  @Input() items = [];
  constructor() { }

  ngOnInit(): void { }
}
