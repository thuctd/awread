import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-rd-search-book-title',
  templateUrl: './rd-search-book-title.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookTitleMolec implements OnInit {
  @Input() faIcon = faSearch;
  @Input() inputControl = new FormControl();
  @Output() submitBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
