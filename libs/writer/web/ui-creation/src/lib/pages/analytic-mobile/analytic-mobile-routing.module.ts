import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticMobilePage } from './analytic-mobile.page';



const routes: Routes = [
  { path: '', component: AnalyticMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticMobileRoutingModule { }
