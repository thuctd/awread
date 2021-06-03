import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailDesktopPage } from './news-detail-desktop.page';



const routes: Routes = [
  { path: '', component: NewsDetailDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailDesktopRoutingModule { }
