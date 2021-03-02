import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-search-navbar',
  templateUrl: './search-navbar.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchNavbarAtom implements OnInit {
  @Input() placeholder = 'Tìm kiếm tên truyện, tác giả, thể loại ...';
  @Input() control = new FormControl();
  @Input() id = 'search-navbar';
  @Output() searchEvent = new EventEmitter();

  @Input() faIcon = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
