import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-search-book',
  templateUrl: './search-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBookAtom implements OnInit {
  @Input() placeholder = '';
  @Input() control = new FormControl();
  @Input() id = 'search-navbar-mobile';
  @Output() searchEvent = new EventEmitter();
  @Input() faIcon = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
