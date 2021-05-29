import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBookDesktopPage } from './detail-book-desktop.page';



const routes: Routes = [
  { path: '', component: DetailBookDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailBookDesktopRoutingModule { }
