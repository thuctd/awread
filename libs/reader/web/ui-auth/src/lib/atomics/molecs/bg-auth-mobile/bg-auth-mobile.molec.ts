import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-bg-auth-mobile',
  templateUrl: './bg-auth-mobile.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BgAuthMobileMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
