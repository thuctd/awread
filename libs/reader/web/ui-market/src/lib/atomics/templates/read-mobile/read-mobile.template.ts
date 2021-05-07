import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'template-read-mobile',
  templateUrl: './read-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMobileTemplate implements OnInit {
  @Output() nativeTopBook = new EventEmitter();
  @Input() topBooks = [];

  constructor() {}

  ngOnInit(): void {}
}
