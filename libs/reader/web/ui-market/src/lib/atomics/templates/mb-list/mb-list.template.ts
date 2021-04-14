import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() books = [];

  constructor() { }

  ngOnInit(): void {
  }

}
