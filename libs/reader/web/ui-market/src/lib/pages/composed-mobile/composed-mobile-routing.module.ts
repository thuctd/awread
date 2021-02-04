import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposedMobilePage } from './composed-mobile.page';



const routes: Routes = [
  { path: '', component: ComposedMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposedMobileRoutingModule { }
