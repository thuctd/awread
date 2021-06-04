import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-top-books-mb',
  templateUrl: './top-books-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBooksMbTemplate implements OnInit {
  isMenu = false;
  @Input() titlePage;
  @Input() books = [];
  @Input() topBooks = [];
  @Input() items = [];
  @Output() emitChangeBooks = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
