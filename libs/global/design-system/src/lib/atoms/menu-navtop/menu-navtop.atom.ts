import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "menu-navtop",
  templateUrl: "./menu-navtop.atom.html",
  styleUrls: ["./menu-navtop.atom.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavtopAtom implements OnInit {
  @Input() faIcon = faSignOutAlt;
  @Input() isMenuOpen = false;
  @Input() avatarUrl = "http://tachyons.io/img/logo.jpg";
  @Input() name = "Tran Quang Hiep";
  @Output() signoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
