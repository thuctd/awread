import { User } from '@awread/writer/web/feature-auth';
import { faSignOutAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'menu-navtop',
  templateUrl: './menu-navtop.atom.html',
  styleUrls: ['./menu-navtop.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavtopAtom implements OnInit {
  @Input() faIcon = {faSignOutAlt, faInfoCircle};
  @Input() isMenuOpen = false;
  // @Input() avatarUrl = 'http://tachyons.io/img/logo.jpg';
  // @Input() name = 'Hà Thanh Tùng';
  // @Input() email = 'thanhtung@gmail.com';
  @Input() curentUser;
  @Output() signoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleMenu($event?) {
   if($event) $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
