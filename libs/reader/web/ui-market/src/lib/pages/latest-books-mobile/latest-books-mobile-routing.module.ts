import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestBooksMobilePage } from './latest-books-mobile.page';



const routes: Routes = [
  { path: '', component: LatestBooksMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestBooksMobileRoutingModule { }
