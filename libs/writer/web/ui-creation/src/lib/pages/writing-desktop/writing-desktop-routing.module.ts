import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WritingDesktopPage } from "./writing-desktop.page";

const routes: Routes = [{ path: "", component: WritingDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WritingDesktopRoutingModule {}
