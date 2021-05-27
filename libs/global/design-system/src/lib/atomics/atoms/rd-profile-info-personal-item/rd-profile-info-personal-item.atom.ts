import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-profile-info-personal-item',
  templateUrl: './rd-profile-info-personal-item.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdProfileInfoPersonalItemAtom implements OnInit {
  @Input() key = 'Tên hiển thị';
  @Input() value = 'aaaa';

  constructor() {}

  ngOnInit(): void {}
}
