import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTocDesktopPage } from './detail-toc-desktop.page';



const routes: Routes = [
  { path: '', component: DetailTocDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTocDesktopRoutingModule { }
