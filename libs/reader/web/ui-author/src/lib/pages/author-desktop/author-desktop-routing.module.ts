import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDesktopPage } from './author-desktop.page';



const routes: Routes = [
  { path: '', component: AuthorDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorDesktopRoutingModule { }
