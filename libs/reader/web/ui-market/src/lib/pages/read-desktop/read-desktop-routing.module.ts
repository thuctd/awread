import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadDesktopPage } from './read-desktop.page';



const routes: Routes = [
  { path: '', component: ReadDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadDesktopRoutingModule { }
