import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninDesktopPage } from './signin-desktop.page';

const routes: Routes = [{ path: '', component: SigninDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninDesktopRoutingModule {}
