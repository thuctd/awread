import { Component, ChangeDetectionStrategy } from "@angular/core";
import { WritingPage } from "../writing/writing.page";

@Component({
  selector: "page-writing-mobile",
  templateUrl: "./writing-mobile.page.html",
  styleUrls: ["./writing-mobile.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingMobilePage extends WritingPage {}
