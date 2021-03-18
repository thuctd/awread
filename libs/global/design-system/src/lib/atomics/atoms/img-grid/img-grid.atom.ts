import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-img-grid',
  templateUrl: './img-grid.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgGridAtom implements OnInit {
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() altImg = 'awread';
  @Input() bookId = 'bvxz_324345seQ6x';

  constructor() {}

  ngOnInit(): void {}
}
