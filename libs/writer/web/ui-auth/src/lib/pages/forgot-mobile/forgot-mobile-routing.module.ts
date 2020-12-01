import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotMobilePage } from './forgot-mobile.page';



const routes: Routes = [
  { path: '', component: ForgotMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotMobileRoutingModule { }
