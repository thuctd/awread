import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDesktopPage } from './news-desktop.page';



const routes: Routes = [
  { path: '', component: NewsDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDesktopRoutingModule { }
