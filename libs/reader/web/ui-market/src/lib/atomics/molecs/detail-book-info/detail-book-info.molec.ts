import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-detail-book-info',
  templateUrl: './detail-book-info.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookInfoMolec implements OnInit {
  @Input() book = {
    authors: [],
    genres: [],
    published: true,
    updatedAt: '2020',
    description: '(chủ yếu dành cho truyện sưu tầm)'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
