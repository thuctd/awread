import { Component, ChangeDetectionStrategy } from "@angular/core";
import { DetailPage } from "../detail/detail.page";

@Component({
  selector: "page-detail-mobile",
  templateUrl: "./detail-mobile.page.html",
  styleUrls: ["./detail-mobile.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailMobilePage extends DetailPage {}
