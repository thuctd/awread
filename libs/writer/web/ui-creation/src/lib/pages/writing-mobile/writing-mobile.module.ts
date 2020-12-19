import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WritingMobileRoutingModule } from "./writing-mobile-routing.module";
import { WritingMobilePage } from "./writing-mobile.page";

@NgModule({
  declarations: [WritingMobilePage],
  imports: [CommonModule, WritingMobileRoutingModule],
})
export class WritingMobileModule {}
