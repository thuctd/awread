import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-detail-part',
  templateUrl: './wrt-detail-part.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class WrtDetailPartMolec implements OnInit {
  @Input() chapter = {
    position: '',
    title: '',
    published: true,
    updatedAt: '',
  };
  constructor() { }

  ngOnInit(): void { }
}
