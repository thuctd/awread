import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() items = [];
  @Input() books = [];

  constructor() { }

  ngOnInit(): void {
  }

}
