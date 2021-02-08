import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectedDesktopPage } from './collected-desktop.page';



const routes: Routes = [
  { path: '', component: CollectedDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectedDesktopRoutingModule { }
