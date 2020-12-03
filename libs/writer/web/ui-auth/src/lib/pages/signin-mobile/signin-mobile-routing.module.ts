import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninMobilePage } from './signin-mobile.page';

const routes: Routes = [{ path: '', component: SigninMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninMobileRoutingModule {}
