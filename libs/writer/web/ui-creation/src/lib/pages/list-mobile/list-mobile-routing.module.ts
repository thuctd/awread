import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListMobilePage } from "./list-mobile.page";

const routes: Routes = [{ path: "", component: ListMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMobileRoutingModule {}
