import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongStoryMobilePage } from './long-story-mobile.page';



const routes: Routes = [
  { path: '', component: LongStoryMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongStoryMobileRoutingModule { }
