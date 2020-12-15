import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListDesktopRoutingModule } from "./list-desktop-routing.module";
import { ListDesktopPage } from "./list-desktop.page";

@NgModule({
  declarations: [ListDesktopPage],
  imports: [CommonModule, ListDesktopRoutingModule],
})
export class ListDesktopModule {}
