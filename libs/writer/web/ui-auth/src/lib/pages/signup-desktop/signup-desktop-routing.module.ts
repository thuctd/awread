import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupDesktopPage } from './signup-desktop.page';

const routes: Routes = [{ path: '', component: SignupDesktopPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupDesktopRoutingModule {}
