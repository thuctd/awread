import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'changephoto-profile',
  templateUrl: './changephoto-profile.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangephotoProfileAtom implements OnInit {
  @Output() eventChangeImg = new EventEmitter();
  '';
  constructor() {}

  ngOnInit(): void {}
}
