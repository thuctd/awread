import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'auth-title',
  templateUrl: './auth-title.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthTitleAtom implements OnInit {
  @Input() title = 'Title';
  constructor() {}

  ngOnInit(): void {}
}
