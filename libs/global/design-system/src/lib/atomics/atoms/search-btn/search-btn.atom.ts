import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'atom-search-btn',
  templateUrl: './search-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      ::ng-deep .fontNunito {
        font-family: 'Nunito regular', sans-serif !important;
      }
    `,
  ],
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

  options: string[] = ['Tôi lạc quan', 'giữa đám đông', 'Nhưng khi một mình thì lại không'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.inputControl = this.inputControl ?? new FormControl("");
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().indexOf(filterValue) === 0);
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
