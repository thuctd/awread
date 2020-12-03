import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMobilePage } from './profile-mobile.page';

const routes: Routes = [{ path: '', component: ProfileMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMobileRoutingModule {}
