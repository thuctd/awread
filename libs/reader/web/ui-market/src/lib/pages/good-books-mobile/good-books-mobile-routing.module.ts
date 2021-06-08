import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodBooksMobilePage } from './good-books-mobile.page';



const routes: Routes = [
  { path: '', component: GoodBooksMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodBooksMobileRoutingModule { }
