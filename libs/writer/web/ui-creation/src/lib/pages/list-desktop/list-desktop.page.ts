import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ListPage } from "../list/list.page";

@Component({
  selector: "page-list-desktop",
  templateUrl: "./list-desktop.page.html",
  styleUrls: ["./list-desktop.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDesktopPage extends ListPage {}
