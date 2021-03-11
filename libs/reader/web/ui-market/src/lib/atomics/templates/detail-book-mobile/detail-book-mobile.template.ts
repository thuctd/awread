import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-detail-book-mobile',
  templateUrl: './detail-book-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookMobileTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
