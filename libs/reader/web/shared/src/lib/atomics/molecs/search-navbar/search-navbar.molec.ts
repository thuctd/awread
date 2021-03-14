import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-search-navbar',
  templateUrl: './search-navbar.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .shadoww {
        box-shadow: 0px -1px 8px #636669;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchNavbarMolec implements OnInit {
  @Input() search = faSearch;

  @Input() isSearch = false;

  constructor() {}

  ngOnInit(): void {}

  displayMenu() {
    this.isSearch = !this.isSearch;
  }
}
