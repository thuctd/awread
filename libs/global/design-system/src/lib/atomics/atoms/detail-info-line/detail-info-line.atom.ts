import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-detail-info-line',
  templateUrl: './detail-info-line.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .vw-6 {
        width: 8vw;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailInfoLineAtom implements OnInit {
  @Input() title = 'Tác giả';
  @Input() value = 'Cẩm thương';
  constructor() {}

  ngOnInit(): void {}
}
