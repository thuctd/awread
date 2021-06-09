import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureBooksDesktopPage } from './feature-books-desktop.page';



const routes: Routes = [
  { path: '', component: FeatureBooksDesktopPage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureBooksDesktopRoutingModule { }
