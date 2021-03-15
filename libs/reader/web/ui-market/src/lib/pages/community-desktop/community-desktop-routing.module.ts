import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityDesktopPage } from './community-desktop.page';



const routes: Routes = [
  { path: '', component: CommunityDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityDesktopRoutingModule { }
