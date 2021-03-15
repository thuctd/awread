import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorBookDesktopPage } from './author-book-desktop.page';



const routes: Routes = [
  { path: '', component: AuthorBookDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorBookDesktopRoutingModule { }
