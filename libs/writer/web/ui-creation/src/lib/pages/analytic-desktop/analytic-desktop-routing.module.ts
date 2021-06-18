import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticDesktopPage } from './analytic-desktop.page';



const routes: Routes = [
  { path: '', component: AnalyticDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticDesktopRoutingModule { }
