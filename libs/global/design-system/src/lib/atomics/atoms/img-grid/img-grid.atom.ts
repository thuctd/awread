import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-img-grid',
  templateUrl: './img-grid.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgGridAtom implements OnInit {
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() altImg = 'Placeholder';

  constructor() { }

  ngOnInit(): void {
  }

}
