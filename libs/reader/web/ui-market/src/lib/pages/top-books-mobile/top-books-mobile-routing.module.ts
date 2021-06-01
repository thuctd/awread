import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopBooksMobilePage } from './top-books-mobile.page';



const routes: Routes = [
  { path: '', component: TopBooksMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopBooksMobileRoutingModule { }
