import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBookMobilePage } from './detail-book-mobile.page';



const routes: Routes = [
  { path: '', component: DetailBookMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailBookMobileRoutingModule { }
