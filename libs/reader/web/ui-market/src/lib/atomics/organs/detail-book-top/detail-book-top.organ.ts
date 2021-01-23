import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-detail-book-top',
  templateUrl: './detail-book-top.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookTopOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
