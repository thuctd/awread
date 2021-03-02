import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-popup-cover-header',
  templateUrl: './popup-cover-header.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupCoverHeaderAtom implements OnInit {
  @Input() title = "Chọn ảnh đại diện";
  constructor() { }

  ngOnInit(): void {
  }

}
