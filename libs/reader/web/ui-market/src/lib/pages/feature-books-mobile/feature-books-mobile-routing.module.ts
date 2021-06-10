import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureBooksMobilePage } from './feature-books-mobile.page';



const routes: Routes = [
  { path: '', component: FeatureBooksMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureBooksMobileRoutingModule { }
