import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'auth-header',
  templateUrl: './auth-header.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthHeaderMolec implements OnInit {
  @Input() title;
  @Input() description;
  constructor() {}

  ngOnInit(): void {}
}
