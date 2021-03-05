import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-block',
  templateUrl: './rd-author-popup-block.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorPopupBlockTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
