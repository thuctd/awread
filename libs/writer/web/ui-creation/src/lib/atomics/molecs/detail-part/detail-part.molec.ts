import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-part',
  templateUrl: './detail-part.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class DetailPartMolec implements OnInit {
  @Input() chapter = {
    chapterNumber: '',
    title: '',
    status: '',
    updatedat: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
