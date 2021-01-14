import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  faAngleDown,
  faPlusCircle,
  faPlusSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wrt-icon-menu',
  templateUrl: './wrt-icon-menu.atom.html',
  styleUrls: ['./wrt-icon-menu.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtIconMenuAtom implements OnInit {
  @Input() faIcon = faAngleDown;
  @Input() faIconBtn = faAngleDown;
  @Output() sumitEvent = new EventEmitter();
  @Input() actions = [
    {
      name: 'new chapter',
      type: 'new-chapter',
      icon: faPlusCircle,
    },
    {
      name: 'edit',
      type: 'edit',
      icon: faPlusSquare,
    },
    {
      name: 'delete',
      type: 'delete',
      icon: faTrash,
    },
  ];

  isMenuOpen = false;
  constructor() {}
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {}
}
