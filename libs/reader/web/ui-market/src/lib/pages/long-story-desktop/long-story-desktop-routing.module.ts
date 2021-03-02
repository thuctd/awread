import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongStoryDesktopPage } from './long-story-desktop.page';



const routes: Routes = [
  { path: '', component: LongStoryDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongStoryDesktopRoutingModule { }
