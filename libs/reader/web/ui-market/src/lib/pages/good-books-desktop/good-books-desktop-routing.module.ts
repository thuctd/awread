import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodBooksDesktopPage } from './good-books-desktop.page';



const routes: Routes = [
  { path: '', component: GoodBooksDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodBooksDesktopRoutingModule { }
