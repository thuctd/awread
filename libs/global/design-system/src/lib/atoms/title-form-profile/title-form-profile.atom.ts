import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "title-form-profile",
  templateUrl: "./title-form-profile.atom.html",
  styleUrls: ["./title-form-profile.atom.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleFormProfileAtom implements OnInit {
  @Input() title = "Edit Profile";

  constructor() {}

  ngOnInit(): void {}
}
