import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMobilePage } from './register-mobile.page';

const routes: Routes = [{ path: '', component: RegisterMobilePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMobileRoutingModule {}
