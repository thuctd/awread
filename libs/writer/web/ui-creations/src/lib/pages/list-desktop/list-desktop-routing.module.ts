import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDesktopPage } from './list-desktop.page';

const routes: Routes = [{ path: '', component: ListDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDesktopRoutingModule {}
