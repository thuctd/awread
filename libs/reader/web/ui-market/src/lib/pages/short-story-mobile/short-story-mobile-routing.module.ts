import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortStoryMobilePage } from './short-story-mobile.page';



const routes: Routes = [
  { path: '', component: ShortStoryMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortStoryMobileRoutingModule { }
