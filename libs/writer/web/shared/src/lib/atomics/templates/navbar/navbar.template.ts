import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.template.html",
  styleUrls: ["./navbar.template.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarTemplate implements OnInit {
  @Output() searchEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
