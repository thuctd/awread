import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { faFile } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "menu-navleft",
  templateUrl: "./menu-navleft.atom.html",
  styleUrls: ["./menu-navleft.atom.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavleftAtom implements OnInit {
  upLoad = {
    UploadUrl: "/global-assets/images/upload.png",
    linkName: "upLoad",
    linkTo: "",
  };
  iconUrl = "/global-assets/images/upload.png";
  @Input() isMenuOpen = false;
  @Input() faIcon = faFile;
  @Output() next = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
