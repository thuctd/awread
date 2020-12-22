import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCompleteMobilePage } from './register-complete-mobile.page';



const routes: Routes = [
  { path: '', component: RegisterCompleteMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCompleteMobileRoutingModule { }
