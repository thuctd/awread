import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WritingMobilePage } from "./writing-mobile.page";

const routes: Routes = [{ path: "", component: WritingMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WritingMobileRoutingModule {}
