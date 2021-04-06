import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'template-rd-search-book',
  templateUrl: './rd-search-book.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookTemplate implements OnInit {
  @Input() searchControl: FormControl = new FormControl();
  @Input() items = [];

  constructor() { }

  ngOnInit(): void { }
}
