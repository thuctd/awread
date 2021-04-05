import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @ViewChild('search') searchElement: ElementRef;
  @Input() inputControl: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.inputControl = this.inputControl ?? new FormControl("");
  }

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
    if (this.isDisplay === true) {
      setTimeout(() => {
        this.searchElement.nativeElement.focus();
      }, 1000);
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.isDisplay = false;
  }
}
