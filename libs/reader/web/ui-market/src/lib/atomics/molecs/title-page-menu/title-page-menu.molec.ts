import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-title-page-menu',
  templateUrl: './title-page-menu.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitlePageMenuMolec implements OnInit {
  @Input() titlePage = 'Truyện tự sáng tác';
  @Input() bookId: string;
  @Input() faIcon = faAngleDown;
  @Input() isMenu: true | false = true;
  @Input() items = [];
  @Output() bookActionEvent = new EventEmitter();
  @Output() emitChangeBooks = new EventEmitter();
  isMenuOpen = true;
  constructor() { }
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  ngOnInit(): void { }
  // add chapter, edit book
  handleBookAction(type: string) {
    this.bookActionEvent.emit(type);
  }
}
