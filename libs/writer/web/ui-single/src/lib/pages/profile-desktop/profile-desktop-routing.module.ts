import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDesktopPage } from './profile-desktop.page';

const routes: Routes = [{ path: '', component: ProfileDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDesktopRoutingModule {}
