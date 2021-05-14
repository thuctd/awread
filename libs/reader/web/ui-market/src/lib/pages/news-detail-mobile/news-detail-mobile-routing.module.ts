import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailMobilePage } from './news-detail-mobile.page';

const routes: Routes = [{ path: '', component: NewsDetailMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDetailMobileRoutingModule {}
