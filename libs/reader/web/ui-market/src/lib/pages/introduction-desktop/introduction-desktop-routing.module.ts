import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionDesktopPage } from './introduction-desktop.page';



const routes: Routes = [
  { path: '', component: IntroductionDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionDesktopRoutingModule { }
