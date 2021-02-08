import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortStoryDesktopPage } from './short-story-desktop.page';



const routes: Routes = [
  { path: '', component: ShortStoryDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortStoryDesktopRoutingModule { }
