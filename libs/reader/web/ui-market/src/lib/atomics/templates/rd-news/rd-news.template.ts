import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-news',
  templateUrl: './rd-news.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdNewsTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
