import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMobilePage } from './search-mobile.page';



const routes: Routes = [
  { path: '', component: SearchMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMobileRoutingModule { }
