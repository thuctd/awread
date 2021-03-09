import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-mb-list',
  templateUrl: './mb-list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MbListTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
