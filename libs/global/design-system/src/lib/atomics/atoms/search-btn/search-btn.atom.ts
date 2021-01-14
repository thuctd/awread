import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-search-btn',
  templateUrl: './search-btn.atom.html',
  styleUrls: ['./search-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBtnAtom implements OnInit {
  icons = {faSearch, faTimes};
  isDisplay = false;
  @Output() eventSearch = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }

}
