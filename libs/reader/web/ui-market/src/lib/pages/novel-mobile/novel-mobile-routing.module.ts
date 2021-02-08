import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelMobilePage } from './novel-mobile.page';



const routes: Routes = [
  { path: '', component: NovelMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovelMobileRoutingModule { }
