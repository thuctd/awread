import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupMobilePage } from './signup-mobile.page';

const routes: Routes = [{ path: '', component: SignupMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupMobileRoutingModule {}
