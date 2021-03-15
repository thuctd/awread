import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityMobilePage } from './community-mobile.page';



const routes: Routes = [
  { path: '', component: CommunityMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityMobileRoutingModule { }
