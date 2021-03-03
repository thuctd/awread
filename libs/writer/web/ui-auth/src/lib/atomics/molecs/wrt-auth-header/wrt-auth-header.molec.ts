import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-auth-header',
  templateUrl: './wrt-auth-header.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtAuthHeaderMolec implements OnInit {
  @Input() title;
  @Input() description;
  constructor() {}

  ngOnInit(): void {}
}
