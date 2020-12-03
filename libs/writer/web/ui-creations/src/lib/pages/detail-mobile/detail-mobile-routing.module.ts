import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMobilePage } from './detail-mobile.page';

const routes: Routes = [{ path: '', component: DetailMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMobileRoutingModule {}
