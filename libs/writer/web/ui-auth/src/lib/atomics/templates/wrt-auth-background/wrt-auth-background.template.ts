import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-template-auth-background',
  templateUrl: './wrt-auth-background.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtAuthBackgroundTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
