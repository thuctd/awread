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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitlePageMenuMolec implements OnInit {
  @Input() titlePage = 'Title';
  @Input() bookId: string;
  @Input() faIcon = faAngleDown;
  @Input() isMenu: true | false = false;
  @Input() links = [
    {
      name: 'Truyện dài',
      href: 'long-story'
    },
    {
      name: 'Truyện ngắn',
      href: 'short-story'
    },
    {
      name: 'Tiểu thuyết',
      href: 'novel'
    }
  ];
  @Output() bookActionEvent = new EventEmitter();
  isMenuOpen = false;
  constructor() { }
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void { }
  // add chapter, edit book
  handleBookAction(type: string) {
    this.bookActionEvent.emit(type);
  }

}
