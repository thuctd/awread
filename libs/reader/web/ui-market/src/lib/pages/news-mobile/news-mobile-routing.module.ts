import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsMobilePage } from './news-mobile.page';



const routes: Routes = [
  { path: '', component: NewsMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsMobileRoutingModule { }
