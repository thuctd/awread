import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'social-btn',
  templateUrl: './social-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialBtnAtom implements OnInit {
  @Output() socialBtn = new EventEmitter();
  @Input() provider = 'facebook';
  constructor() {}

  ngOnInit(): void {}
}
