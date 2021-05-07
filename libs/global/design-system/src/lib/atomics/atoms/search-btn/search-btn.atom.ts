import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'atom-search-btn',
  templateUrl: './search-btn.atom.html',
  styleUrls: ['./search-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBtnAtom implements OnInit {
  icons = { faSearch, faTimes };
  isDisplay = false;
  isDisplayAutoComplete: true | false = false;
  @Output() eventSearch = new EventEmitter();
  @Input() color = 'text-white';
  @ViewChild('search') searchElement: ElementRef;
  @Input() inputControl: FormControl = new FormControl('');
  constructor() { }

  @Input() options = [{
    bookId: '1',
    title: 'Tôi lạc quan'
  }];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
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
