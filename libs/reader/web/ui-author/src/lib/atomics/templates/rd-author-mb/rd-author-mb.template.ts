import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-mb',
  templateUrl: './rd-author-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorMbTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
