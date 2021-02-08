import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectedMobilePage } from './collected-mobile.page';



const routes: Routes = [
  { path: '', component: CollectedMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectedMobileRoutingModule { }
