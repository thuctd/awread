import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-product-mb',
  templateUrl: './rd-author-product-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorProductMbTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
