import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-auth-background',
  templateUrl: './auth-background.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBackgroundTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
