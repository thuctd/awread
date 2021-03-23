import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() title = 'Em là nhà';

  constructor() {}

  ngOnInit(): void {}
}
