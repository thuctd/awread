import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "top-nav",
  templateUrl: "./top-nav.organ.html",
  styleUrls: ["./top-nav.organ.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavOrgan implements OnInit {
  @Output() searchEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
