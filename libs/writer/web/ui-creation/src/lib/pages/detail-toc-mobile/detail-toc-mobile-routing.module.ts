import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTocMobilePage } from './detail-toc-mobile.page';



const routes: Routes = [
  { path: '', component: DetailTocMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTocMobileRoutingModule { }
