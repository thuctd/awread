import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingMobilePage } from './setting-mobile.page';



const routes: Routes = [
  { path: '', component: SettingMobilePage }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingMobileRoutingModule { }
