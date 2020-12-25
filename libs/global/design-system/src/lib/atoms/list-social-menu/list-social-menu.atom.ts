import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faAngleDown, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-social-menu',
  templateUrl: './list-social-menu.atom.html',
  styleUrls: ['./list-social-menu.atom.scss'],
  host: {
    "(window:click)": "onClick()"
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSocialMenuAtom implements OnInit {
  @Input() faIcon = faAngleDown;
  @Input() labelText = 'Edit';
  @Input() faIconBtn = faAngleDown;
  @Input() actions = [
    {
      name: 'new chapter',
      type: 'new-chapter',
      icon: faPlusCircle
    },
    {
      name: 'edit',
      type: 'edit',
      icon: faPlusSquare
    },
    {
      name: 'delete',
      type: 'delete',
      icon: faTrash
    }
  ];

  isMenuOpen = false;
  constructor() {
  }
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
  }

}
