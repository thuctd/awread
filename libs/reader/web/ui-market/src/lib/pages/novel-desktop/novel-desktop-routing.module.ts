import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelDesktopPage } from './novel-desktop.page';



const routes: Routes = [
  { path: '', component: NovelDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovelDesktopRoutingModule { }
