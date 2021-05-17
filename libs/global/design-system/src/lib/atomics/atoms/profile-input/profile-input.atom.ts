import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-profile-input',
  templateUrl: './profile-input.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInputAtom implements OnInit {
  @Input() item = {
    title: 'Tên hiển thị',
    formControlName: 'name',
  };

  constructor() {}

  ngOnInit(): void {}
}
