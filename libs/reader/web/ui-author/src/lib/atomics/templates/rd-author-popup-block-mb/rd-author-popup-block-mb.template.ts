import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-block-mb',
  templateUrl: './rd-author-popup-block-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorPopupBlockMbTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
