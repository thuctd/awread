import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faAngleDown, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-social-menu',
  templateUrl: './list-social-menu.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSocialMenuAtom implements OnInit {
  @Input() faIcon = faAngleDown;
  @Input() labelText = 'Edit';
  @Input() bookId: string;
  @Input() faIconBtn = faAngleDown;
  @Input() actions = [
    {
      name: 'Thêm chương',
      type: 'create-chapter',
      icon: faPlusCircle,
    },
    {
      name: 'Chỉnh sửa',
      type: 'edit',
      icon: faPlusSquare,
    },
    {
      name: 'Xóa',
      type: 'delete',
      icon: faTrash,
    },
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
