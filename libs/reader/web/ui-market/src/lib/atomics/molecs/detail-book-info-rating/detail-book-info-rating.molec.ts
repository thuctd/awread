import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';

@Component({
  selector: 'molec-detail-book-info-rating',
  templateUrl: './detail-book-info-rating.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookInfoRatingMolec implements OnInit {
  @Input() rating = '124,000'
  constructor() { }

  ngOnInit(): void {
  }

}
