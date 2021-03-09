import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposedDesktopPage } from './composed-desktop.page';



const routes: Routes = [
  { path: '', component: ComposedDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposedDesktopRoutingModule { }
