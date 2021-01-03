import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  faAngleDown,
  faEllipsisH,
  faPlusCircle,
  faPlusSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detail-social-menu',
  templateUrl: './detail-social-menu.atom.html',
  styleUrls: ['./detail-social-menu.atom.scss'],
  host: {
    '(window:click)': 'onClick()',
  },
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailSocialMenuAtom implements OnInit {
  @Input() faIconComments = faEllipsisH;
  @Output() chapterActionEvent = new EventEmitter();
  actions = [
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
