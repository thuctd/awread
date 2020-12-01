import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterDesktopPage } from './register-desktop.page';

const routes: Routes = [{ path: '', component: RegisterDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDesktopRoutingModule {}
