import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-home-tab-book',
  templateUrl: './rd-home-tab-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeTabBookAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Output() onBtnClicked = new EventEmitter();
  @Input() titleBook = 'Cô gái chúng ta cùng theo đuổi';
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
