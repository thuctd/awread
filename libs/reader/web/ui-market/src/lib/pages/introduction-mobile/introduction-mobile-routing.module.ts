import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionMobilePage } from './introduction-mobile.page';



const routes: Routes = [
  { path: '', component: IntroductionMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionMobileRoutingModule { }
