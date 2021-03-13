import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-detail-info-line-link',
  templateUrl: './detail-info-line-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailInfoLineLinkAtom implements OnInit {
  @Input() bookId = '';
  @Input() title = 'Tác giả';
  @Input() value = 'Cẩm thương';

  constructor() {}

  ngOnInit(): void {}
}
