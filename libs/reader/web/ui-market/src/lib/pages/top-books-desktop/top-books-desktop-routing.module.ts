import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopBooksDesktopPage } from './top-books-desktop.page';



const routes: Routes = [
  { path: '', component: TopBooksDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopBooksDesktopRoutingModule { }
