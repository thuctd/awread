import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorMobilePage } from './author-mobile.page';



const routes: Routes = [
  { path: '', component: AuthorMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorMobileRoutingModule { }
