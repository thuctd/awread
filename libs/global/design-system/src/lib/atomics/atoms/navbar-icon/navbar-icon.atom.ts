import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "navbar-icon",
  templateUrl: "./navbar-icon.atom.html",
  styleUrls: ["./navbar-icon.atom.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarIconAtom implements OnInit {
  @Input() active = "active";
  @Input() linkName = "dashboard";
  @Input() linkTo = "dashboard";
  @Input() iconUrl = "/global-assets/images/Dashboard.png";

  constructor() { }

  ngOnInit(): void { }
}
