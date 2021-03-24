import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-home',
  templateUrl: './home.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate implements OnInit {
  @Input() books = [];
  @Input() loading: boolean;
  constructor() { }

  ngOnInit(): void { }
}
