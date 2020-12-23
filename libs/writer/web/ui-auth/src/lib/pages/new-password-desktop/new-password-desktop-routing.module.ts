import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPasswordDesktopPage } from './new-password-desktop.page';



const routes: Routes = [
  { path: '', component: NewPasswordDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPasswordDesktopRoutingModule { }
