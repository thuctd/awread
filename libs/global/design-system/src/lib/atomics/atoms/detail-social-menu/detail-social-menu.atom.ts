import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { faEllipsisH, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detail-social-menu',
  templateUrl: './detail-social-menu.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailSocialMenuAtom implements OnInit {
  @Input() faIconComments = faEllipsisH;
  @Input() chapter;
  @Output() chapterActionEvent = new EventEmitter();
  actions = [
    // {
    //   name: 'Tạo chương',
    //   type: 'new-chapter',
    //   icon: faPlusCircle,
    // },
    // {
    //   name: 'Chỉnh sửa',
    //   type: 'edit',
    //   icon: faPlusSquare,
    // },
    {
      name: 'Xóa',
      type: 'delete',
      icon: faTrash,
    },
  ];

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
}
