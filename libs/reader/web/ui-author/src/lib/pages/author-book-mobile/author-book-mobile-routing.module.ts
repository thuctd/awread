import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorBookMobilePage } from './author-book-mobile.page';



const routes: Routes = [
  { path: '', component: AuthorBookMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorBookMobileRoutingModule { }
