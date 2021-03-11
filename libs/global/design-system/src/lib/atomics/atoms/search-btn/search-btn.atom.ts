import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-search-btn',
  templateUrl: './search-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBtnAtom implements OnInit {
  icons = { faSearch, faTimes };
  isDisplay = false;
  @Output() eventSearch = new EventEmitter();
  @Input() color = 'text-white';
  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.isDisplay = false;
  }
}
