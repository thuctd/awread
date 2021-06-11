import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestBooksDesktopPage } from './latest-books-desktop.page';



const routes: Routes = [
  { path: '', component: LatestBooksDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestBooksDesktopRoutingModule { }
