import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-author-mb',
  templateUrl: './rd-author-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorMbTemplate implements OnInit {
  @Input() follow = true;
  @Input() isBlock = false;

  constructor() {}

  ngOnInit(): void {}
}
