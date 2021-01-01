import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDesktopPage } from './detail-desktop.page';

const routes: Routes = [{ path: '', component: DetailDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDesktopRoutingModule {}
