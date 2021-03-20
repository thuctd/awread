import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-dropdown-menu-mb',
  templateUrl: './dropdown-menu-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuMbMolec implements OnInit {
  @Input() title = 'Truyện';
  @Input() faIcon = faCaretRight;
  @Input() faIcon2 = faCaretDown;
  @Input() isDisplayMenu = true;
  @Input() items = [
    {
      title: 'Truyện tự sáng tác',
      href: '/composed',
    },
    {
      title: 'Truyện sưu tầm',
      href: '/collected',
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  displayMenu() {
    this.isDisplayMenu = !this.isDisplayMenu;
  }
}
