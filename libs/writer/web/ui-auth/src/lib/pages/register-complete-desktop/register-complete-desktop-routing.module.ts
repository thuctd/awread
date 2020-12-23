import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCompleteDesktopPage } from './register-complete-desktop.page';



const routes: Routes = [
  { path: '', component: RegisterCompleteDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCompleteDesktopRoutingModule { }
