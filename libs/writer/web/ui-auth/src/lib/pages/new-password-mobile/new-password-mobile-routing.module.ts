import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPasswordMobilePage } from './new-password-mobile.page';



const routes: Routes = [
  { path: '', component: NewPasswordMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPasswordMobileRoutingModule { }
