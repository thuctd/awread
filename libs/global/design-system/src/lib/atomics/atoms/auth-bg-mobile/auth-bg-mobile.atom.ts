import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-auth-bg-mobile',
  templateUrl: './auth-bg-mobile.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .header__popup {
        clip-path: ellipse(68% 90% at 50% 10%);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBgMobileAtom implements OnInit {
  @Input() faIcon = faArrowLeft;

  constructor() {}

  ngOnInit(): void {}
}
